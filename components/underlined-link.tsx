import { cn } from '@/lib/utils'
import Link from 'next/link'
import { AnchorHTMLAttributes } from 'react'

interface UnderlinedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
}
export default function UnderlinedLink({
  href,
  children,
  className,
  ...props
}: UnderlinedLinkProps) {
  const classes = cn('decoration-2 underline-offset-6 md:hover:underline', className)

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  )
}
