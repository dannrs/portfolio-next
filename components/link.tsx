import NextLink from 'next/link'
import type { LinkProps } from 'next/link'

export default function Link(props: LinkProps) {
  return (
    <>
      <NextLink
        {...props}
        target='_blank'
        className='inline text-white underline decoration-2 underline-offset-6'
      />
    </>
  )
}
