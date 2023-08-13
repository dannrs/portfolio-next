'use client'

import { useState, useRef } from 'react'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  children: React.ReactNode
}

export function CodeBlock({
  className,
  children,
  ...props
}: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const [showButton, setShowButton] = useState(false)
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
    <div
      className='relative mt-6 flex flex-col rounded-sm border bg-muted dark:bg-accent'
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      {showButton && (
        <Button
          variant='ghost'
          size='icon-md'
          className='absolute right-[0.85rem] top-1'
          onClick={handleCopy}
          disabled={isCopied}
        >
          {isCopied ? (
            'Copied!'
          ) : (
            <p className='rounded-sm border px-2 py-1'>Copy</p>
          )}
        </Button>
      )}
      <pre
        ref={textRef}
        className={cn(
          'grid overflow-x-hidden whitespace-pre-wrap rounded-b-sm py-4 pl-4 no-underline dark:border-muted',
          className
        )}
        {...props}
      >
        {children}
      </pre>
    </div>
  )
}
