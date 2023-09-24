'use client'

import { ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false)

  const isBrowser = () => typeof window !== 'undefined'

  const scrollToTop = () => {
    if (!isBrowser()) return
    window.scrollTo({ top: 0 })
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      setShowButton(scrollTop > 0 && scrollTop + windowHeight < documentHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {showButton && (
        <Button
          size='icon'
          onClick={scrollToTop}
          aria-label='Scroll to Top'
          className='fixed bottom-8 right-8 z-40 print:hidden'
        >
          <ChevronUp />
        </Button>
      )}
    </>
  )
}
