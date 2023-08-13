import { notFound } from 'next/navigation'
import { allPages } from 'contentlayer/generated'

import '@/styles/mdx.css'
import * as motion from '@/lib/motion'
import { RevealAnimation } from '@/lib/motion'
import { Mdx } from '@/components/mdx-components'

export default async function AboutPage() {
  const page = allPages.find(page => page.title === 'About me')

  if (!page) {
    notFound()
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <article className='container pb-8 pt-16 md:max-w-5xl'>
        <h1 className='font-heading text-3xl tracking-tight md:text-4xl'>
          {page.title}
        </h1>
        <p className='py-4 text-lg text-foreground-80'>
          {page.description}
        </p>
        <motion.div
          variants={RevealAnimation}
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ once: true }}
        >
          <Mdx code={page.body.code} />
        </motion.div>
      </article>
    </div>
  )
}
