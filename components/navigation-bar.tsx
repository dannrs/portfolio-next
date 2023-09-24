'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { cn } from '@/lib/utils'
import type { NavigationItem } from '@/lib/types'
import { ModeToggle } from '@/components/mode-toggle'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { siteConfig } from '@/config/site'

interface NavigationProps {
  items?: NavigationItem[]
  children?: React.ReactNode
}

export function NavigationBar({ items }: NavigationProps) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
  const navigationBarRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
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
    <header className='sticky top-0 z-40 bg-blur backdrop-blur-xl backdrop-filter'>
      <nav
        ref={navigationBarRef}
        className='container flex max-w-5xl items-center justify-between'
      >
        <Link href='/' className='z-40 flex h-10 items-center gap-2 py-6'>
          <Image
            src='/logo.svg'
            width={16}
            height={16}
            alt='Danni Ramdhani Logo'
            className='h-8 w-8 border bg-foreground p-1 dark:bg-background'
          />
          <span className='pb-1 font-heading text-lg'>{siteConfig.name}</span>
        </Link>
        <div
          className={cn(
            'absolute left-0 flex w-full flex-col items-center gap-2 border-b border-b-muted pb-4 pt-14 text-sm md:static md:w-auto md:flex-row md:border-none md:p-0 md:text-base',
            showMobileMenu
              ? 'top-0 bg-blur backdrop-blur-xl backdrop-filter'
              : 'top-[-9999px]'
          )}
        >
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                'px-2 py-1 duration-300 ease-in-out hover:text-foreground sm:text-sm',
                item.href.startsWith(`/${segment}`)
                  ? 'underline underline-offset-[16px] decoration-2 text-foreground'
                  : 'text-foreground-80'
              )}
            >
              {item.title}
            </Link>
          ))}
          <ModeToggle />
        </div>
        <button
          className='flex items-center space-x-2 md:hidden'
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? (
            <X width={20} height={20} className='z-40' />
          ) : (
            <Menu width={20} height={20} className='z-40' />
          )}
        </button>
      </nav>
    </header>
  )
}
