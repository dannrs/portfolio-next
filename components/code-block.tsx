'use client'

import { useState, useRef } from 'react'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  type: 'text' | 'code'
  children: React.ReactNode
}

export function CodeBlock({
  className,
  children,
  type,
  ...props
}: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const textRef = useRef<HTMLPreElement>(null)

  const handleCopy = () => {
    const textToCopy = textRef.current?.textContent

    if (textToCopy) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          setIsCopied(true)
          setTimeout(() => setIsCopied(false), 2000)
        })
        .catch(error => {
          console.log('Failed to copy', error)
        })
    }
  }

  return (
    <div className='relative mt-6 rounded-sm border bg-muted dark:bg-accent'>
      <Button
        variant='outline'
        size='sm'
        className='absolute right-2 top-2 z-10 bg-transparent'
        onClick={handleCopy}
        disabled={isCopied}
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </Button>
      <pre
        ref={textRef}
        className={cn(
          'grid rounded-b-sm py-4 pl-4 no-underline dark:border-muted',
          type === 'text'
            ? 'overflow-x-hidden whitespace-pre-wrap'
            : 'overflow-x-scroll',
          className
        )}
        {...props}
      >
        {children}
      </pre>
    </div>
  )
}
