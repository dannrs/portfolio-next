'use client'

import * as React from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { cn } from '@/lib/utils'
import { NavigationItem } from '@/types'
import { ModeToggle } from '@/components/mode-toggle'
import { Menu, X } from 'lucide-react'
import { MobileNavigation } from './mobile-nav'

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
    <header
      ref={navigationBarRef}
      className='container fixed top-0 z-40 w-full bg-blur backdrop-blur-lg backdrop-filter'
    >
      <div className='flex h-10 items-center justify-between py-6'>
        <Link href='/' className='font-heading text-2xl z-40'>
          d.
        </Link>
        <nav className='hidden items-center gap-4 md:flex md:gap-6'>
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                'hover:text-foreground/80 sm:text-sm',
                item.href.startsWith(`/${segment}`)
                  ? 'text-foreground'
                  : 'text-foreground/60'
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
    </header>
  )
}
