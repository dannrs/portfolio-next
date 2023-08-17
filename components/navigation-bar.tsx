'use client'

import * as React from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { cn } from '@/lib/utils'
import { NavigationItem } from '@/lib/types'
import { ModeToggle } from '@/components/mode-toggle'
import { Menu, X } from 'lucide-react'
import { MobileNavigation } from '@/components/mobile-nav'
import Image from 'next/image'
import { siteConfig } from '@/config/site'
import UnderlinedLink from '@/components/underlined-link'

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
        className='container fixed top-0 z-40 bg-blur backdrop-blur-lg backdrop-filter md:max-w-5xl'
      >
        <div className='flex h-10 items-center justify-between py-6'>
          <Link href='/' className='z-40'>
            <div className='flex items-center justify-center gap-2'>
              <Image
                src='/logo.svg'
                width={16}
                height={16}
                alt='Danni Ramdhani Logo'
                className='h-8 w-8 border bg-foreground p-1 dark:bg-background'
              />
              <span className='pb-1 font-heading text-lg'>
                {siteConfig.name}
              </span>
            </div>
          </Link>
          <nav className='hidden items-center gap-2 md:flex'>
            {items?.map((item, index) => (
              <UnderlinedLink
                key={index}
                href={item.href}
                className={cn(
                  'transform rounded-full px-2 py-1 duration-300 ease-in-out sm:text-sm',
                  item.href.startsWith(`/${segment}`)
                    ? 'rounded-full px-2 py-1 underline decoration-2 underline-offset-6'
                    : 'text-foreground'
                )}
              >
                {item.title}
              </UnderlinedLink>
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
