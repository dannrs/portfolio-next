import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'

import * as motion from '@/lib/motion'
import { RevealAnimation } from '@/lib/motion'
import { Mdx } from '@/components/mdx-components'

import '@/styles/mdx.css'
import { Metadata } from 'next'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'

interface PostPageProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostPageProps['params']) {
  const slug = params?.slug?.join('/')
  const post = allPosts.find(post => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  const url = process.env.NEXT_PUBLIC_APP_URL
  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set('heading', post.title)
  ogUrl.searchParams.set('type', 'Blog Post')
  ogUrl.searchParams.set('mode', 'dark')

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `${post.slug}`
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `${post.slug}`,
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogUrl.toString()]
    }
  }
}

export async function generateStaticParams(): Promise<
  PostPageProps['params'][]
> {
  return allPosts.map(post => ({
    slug: post.slugAsParams.split('/')
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <div className='flex flex-col items-center'>
      <article className='container py-6 md:max-w-4xl'>
        <h1 className='mt-16 inline-block font-heading text-3xl leading-tight md:text-4xl'>
          {post.title}
        </h1>
        <div className='my-4'>
          {post.date && (
            <time
              dateTime={post.date}
              className='block border-b pb-4 text-sm text-foreground-80'
            >
              Published on {formatDate(post.date)}
            </time>
          )}
        </div>
        <motion.div
          variants={RevealAnimation}
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ once: true }}
        >
          <div className='pt-4 pb-6'>
            <details className='border border-solid p-4 rounded-sm'>
              <summary className='cursor-pointer'>Table of Contents</summary>
              <ul className='space-y-2 pt-4'>
                {post.toc.map((heading: any) => {
                  return (
                    <li key={`#${heading.slug}`}>
                      <Link href={`#${heading.slug}`} data-level={heading.level} className='hover:underline underline-offset-6 decoration-2 data-[level=two]:pl-0 data-[level=three]:pl-4'>
                        {heading.text}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </details>
          </div>
          <Mdx code={post.body.code} />
        </motion.div>
        <div className='mt-12 flex justify-center'>
          <Link href='/blog'>
            <Button variant='ghost'>
              <ChevronLeft className='mr-2 h-4 w-4' />
              See all posts
            </Button>
          </Link>
        </div>
      </article>
    </div>
  )
}
