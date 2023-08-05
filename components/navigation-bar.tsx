'use client'

import * as React from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { cn } from '@/lib/utils'
import { NavigationItem } from '@/types'
import { ModeToggle } from '@/components/mode-toggle'
import { Menu, X } from 'lucide-react'
import { MobileNavigation } from './mobile-nav'
import Image from 'next/image'
import { siteConfig } from '@/config/site'

interface NavigationProps {
  items?: NavigationItem[]
  children?: React.ReactNode
}

export function NavigationBar({ items, children }: NavigationProps) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)
  const navigationBarRef = React.useRef<HTMLHeadingElement>(null)

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navigationBarRef.current &&
        !navigationBarRef.current.contains(event.target as Node)
      ) {
        setShowMobileMenu(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  })

  return (
    <header className='flex items-center justify-center'>
      <div
        ref={navigationBarRef}
        className='md:max-w-5xl container fixed top-0 z-40 bg-blur backdrop-blur-lg backdrop-filter'
      >
        <div className='flex h-10 items-center justify-between py-6'>
          <Link href='/' className='z-40'>
            <div className='flex gap-2 items-center justify-center'>
            <Image src='/logo.svg' width={16} height={16} alt='Danni Ramdhani Logo' className='p-1 border h-8 w-8' />
            <span className='font-heading pb-1'>{siteConfig.name}</span>
</div>
          </Link>
          <nav className='hidden items-center md:flex gap-2'>
            {items?.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  'hover:text-background rounded-sm transform ease-in-out duration-150 px-2 py-1 hover:bg-foreground sm:text-sm',
                  item.href.startsWith(`/${segment}`)
                    ? 'px-2 py-1 bg-foreground rounded-sm text-background'
                    : 'text-foreground'
                )}
              >
                {item.title}
              </Link>
            ))}
            <ModeToggle />
          </nav>
          <button
            className='flex items-center space-x-2 md:hidden'
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? (
              <X width={20} height={20} className='z-40' />
            ) : (
              <Menu width={20} height={20} className='z-40' />
            )}
            {showMobileMenu && items && (
              <MobileNavigation items={items}>{children}</MobileNavigation>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
