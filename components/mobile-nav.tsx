import * as React from 'react'
import Link from 'next/link'

import { NavigationItem } from '@/lib/types'
import { ModeToggle } from '@/components/mode-toggle'
import { cn } from '@/lib/utils'

interface MobileNavigationProps {
  items: NavigationItem[]
  children?: React.ReactNode
}

export function MobileNavigation({ items, children }: MobileNavigationProps) {
  return (
    <header
      className={cn(
        'fixed right-0 top-0 grid w-full border-b border-b-muted bg-blur pt-12 backdrop-blur-xl backdrop-filter animate-in slide-in-from-bottom-80 md:hidden'
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
          <div className='flex items-center justify-center py-4 pt-1'>
            <ModeToggle />
          </div>
        </nav>
        {children}
      </div>
    </header>
  )
}
