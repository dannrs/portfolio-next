import * as React from 'react'
import Link from 'next/link'

import { NavigationItem } from '@/types'
import { ModeToggle } from '@/components/mode-toggle'
import { cn } from '@/lib/utils'

interface MobileNavigationProps {
  items: NavigationItem[]
  children?: React.ReactNode
}

export function MobileNavigation({ items, children}: MobileNavigationProps) {
  return (
    <header
      className={cn(
        'fixed right-0 top-0 pt-12 grid border-b border-b-muted bg-blur backdrop-blur-xl backdrop-filter animate-in slide-in-from-bottom-80 md:hidden'
      )}
    >
      <div className='relative grid p-0 shadow-md'>
        <nav className='grid grid-flow-row auto-rows-max text-sm'>
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                'flex w-full items-center justify-center rounded-md p-2 text-sm hover:underline'
              )}
            >
              {item.title}
            </Link>
          ))}
          <div className='flex items-center justify-center pt-1 py-4'>
            <ModeToggle />
          </div>
        </nav>
        {children}
      </div>
    </header>
  )
}
