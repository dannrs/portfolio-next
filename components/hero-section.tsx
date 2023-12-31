import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className='container mx-auto flex h-[calc(100dvh-4rem)] max-w-5xl flex-col items-center justify-center md:flex-row-reverse'>
      <div className='flex w-3/4 justify-center sm:w-[55%] md:w-1/2 md:justify-end'>
        <Image
          src='/images/hero.svg'
          alt='hero-image'
          width={420}
          height={420}
          priority
        />
      </div>
      <div className='flex flex-col items-center justify-center gap-2 md:w-1/2 md:items-start md:justify-start md:gap-4'>
        <h1 className='font-heading text-3xl/7 sm:text-4xl md:text-5xl'>
          {siteConfig.name}
        </h1>
        <p className='max-w-4xl py-2 text-center text-foreground-80 sm:text-lg md:text-left lg:text-xl'>
          {siteConfig.description}
        </p>
        <div>
          <Link href='#overview'>
            <Button className='mr-4'>Learn more</Button>
          </Link>
          <Link href='/contact'>
            <Button variant='outline'>Contact</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
