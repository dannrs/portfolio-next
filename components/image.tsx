import NextImage, { ImageProps } from 'next/image'

interface CustomImageProps extends ImageProps {
  alt: string;
}

const Image = ({alt, ...props}: CustomImageProps) => {
  return (
    <div className='flex justify-center'>
      <NextImage
        {...props}
        alt={alt}
        title={alt}
        className='mt-6 w-10/12 rounded-sm'
        width='1366'
        height='768'
      />
    </div>
  )
}

export default Image
