import Link from 'next/link'
import * as motion from '@/lib/motion'
import { RevealAnimation } from '@/lib/motion'
import { MoveRight } from 'lucide-react'

export default function OverviewSection() {
  return (
    <>
      <h2 className='font-heading text-3xl md:text-4xl'>Overview</h2>
      <motion.div
        variants={RevealAnimation}
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{ once: true }}
      >
        <p className='text-foreground-80'>
          Hello, my name is Danni Ramdhani Samsudin. I&apos;m an enthusiastic
          web developer from Sumedang, Indonesia, specializing in React
          especially Next.js. I&apos;m passionate about building intuitive and
          engaging web experiences. I also love to learn and experiment with new
          technologies.&nbsp;
          <Link href='/about' className=''>
            <span className='font-semibold text-foreground'>
              Read more about me&nbsp;
              <span>
                <MoveRight className='h-4 w-4 inline' />
              </span>
            </span>
          </Link>
        </p>
      </motion.div>
    </>
  )
}
