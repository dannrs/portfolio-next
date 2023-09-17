import NextImage, { ImageProps } from 'next/image'

interface CustomImageProps extends ImageProps {
  alt: string
}

export default function Image({ alt, ...props }: CustomImageProps) {
  return (
    <div className='flex justify-center'>
      <NextImage
        {...props}
        alt={alt}
        title={alt}
        className='mt-6 w-full rounded-sm md:w-11/12'
        width='1366'
        height='768'
      />
    </div>
  )
}
