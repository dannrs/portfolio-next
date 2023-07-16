'use client'

import { useState, useRef } from 'react'
import { Check, Copy } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  children: React.ReactNode
}

export function CodeBlock({
  className,
  title,
  children,
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
    <div className='flex flex-col mt-6 bg-muted dark:bg-accent'>
      <div className='flex items-center gap-2 border-t border-x border-x-gray-300 dark:border-x-muted border-t-gray-300 py-1 pl-4 pr-2 font-sans text-sm font-medium dark:border-t-muted md:justify-between md:gap-0 rounded-t-sm'>
        {title}
        <Button
          variant='ghost'
          size='icon-md'
          onClick={handleCopy}
          disabled={isCopied}
        >
          {isCopied ? (
            <Check className='h-4 w-4' aria-label='Copied' />
          ) : (
            <Copy className='h-4 w-4 text-foreground' aria-label='Copy code' />
          )}
        </Button>
      </div>
      <pre
        ref={textRef}
        className={cn(
          'grid overflow-x-scroll rounded-b-sm border border-gray-300 dark:border-muted py-4',
          className
        )}
        {...props}
      >
        {children}
      </pre>
    </div>
  )
}
