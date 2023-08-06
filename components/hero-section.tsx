import Image from 'next/image'
import Link from 'next/link'
import * as motion from '@/lib/motion'
import { RevealAnimation } from '@/lib/motion'
import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className='flex h-screen items-center justify-center'>
      <motion.div
        variants={RevealAnimation}
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{ once: true }}
        className='container mx-auto flex max-w-5xl flex-col items-center justify-center md:flex-row-reverse'
      >
        <div className='flex w-3/4 justify-center md:w-1/2 md:justify-end'>
          <Image
            src='/images/hero.svg'
            alt='hero-image'
            width={480}
            height={480}
          />
        </div>
        <div className='flex flex-col items-center justify-center gap-2 md:w-1/2 md:items-start md:justify-start md:gap-4'>
          <h1 className='font-heading text-4xl md:text-5xl'>
            {siteConfig.name}
          </h1>
          <p className='max-w-4xl text-center text-lg text-foreground-80 md:text-left md:text-xl'>
            {siteConfig.description}
          </p>
          <div className='pt-2'>
            <Link href='#overview'>
              <Button className='mr-4'>Learn more</Button>
            </Link>
            <Link href='/contact'>
              <Button variant='outline'>Contact</Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
