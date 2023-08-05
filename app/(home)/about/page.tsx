import { notFound } from 'next/navigation'
import { allPages } from 'contentlayer/generated'

import { Mdx } from '@/components/mdx-components'

import '@/styles/mdx.css'

export default async function AboutPage() {
  const page = allPages.find(page => page.title === 'About me')

  if (!page) {
    notFound()
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <article className='container pt-16 pb-8 md:max-w-5xl'>
        <h1 className='font-heading text-3xl tracking-tight md:text-4xl'>
          {page.title}
        </h1>
        <p className='text-lg text-foreground-80 md:text-xl py-4'>
          {page.description}
        </p>
        <Mdx code={page.body.code} />
      </article>
    </div>
  )
}
