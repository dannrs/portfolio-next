import { allPosts } from 'contentlayer/generated'
import { ChevronLeft, Hash } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import '@/styles/mdx.css'
import { Mdx } from '@/components/mdx-components'
import { Button } from '@/components/ui/button'
import { formatDate } from '@/lib/utils'
import { HeadingType } from '@/lib/types'
import { slug } from 'github-slugger'

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
  const readingTime = Math.round(post?.readingTime.minutes)

  if (!post) {
    notFound()
  }

  return (
    <div className='flex flex-col items-center'>
      <article className='container py-6 md:max-w-4xl'>
        <h1 className='mt-16 inline-block font-heading text-3xl leading-tight md:text-4xl'>
          {post.title}
        </h1>
        <div className='mb-2 mt-4'>
          {post.date && (
            <time
              dateTime={post.date}
              className='block text-sm text-foreground-80'
            >
              {formatDate(post.date)}
              <span>
                &nbsp;&bull;&nbsp;{readingTime}{' '}
                {readingTime === 1 ? 'min' : 'mins'} read
              </span>
            </time>
          )}
        </div>
        <div className='flex gap-2'>
          {post.tags?.map(tag => {
            return (
              <Link
                key={tag}
                href={`/blog/tags/${slug(tag)}`}
                className='flex items-center justify-center text-sm text-foreground-80'
              >
                <Hash className='inline-block h-[0.8rem] w-[0.8rem]' /> {tag}
              </Link>
            )
          })}
        </div>
        <div className='py-8'>
          <details className='rounded-sm border border-solid p-4'>
            <summary className='cursor-pointer'>Table of Contents</summary>
            <ul className='space-y-2 pt-4'>
              {post.toc.map((heading: HeadingType) => {
                return (
                  <li key={`#${heading.slug}`}>
                    <Link
                      href={`#${heading.slug}`}
                      data-level={heading.level}
                      className='decoration-2 underline-offset-6 hover:underline data-[level=three]:pl-6 data-[level=two]:pl-0'
                    >
                      {heading.text}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </details>
        </div>
        <Mdx code={post.body.code} />
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
