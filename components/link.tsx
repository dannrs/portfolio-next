import NextLink, {LinkProps} from 'next/link'

export default function Link(props: LinkProps) {
  return (
    <>
      <NextLink
        {...props}
        target='_blank'
        className='inline text-white underline underline-offset-6 decoration-2'
      />
    </>
  )
}
