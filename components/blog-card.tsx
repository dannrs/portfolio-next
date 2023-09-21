'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { formatDate } from '@/lib/utils'
import { slug } from 'github-slugger'

interface Props {
  tag?: string
}

export default function BlogCard({ tag }: Props) {
  const pathname = usePathname()
  let posts = allPosts
    .filter(
      post =>
        post.published &&
        (!tag || post.tags?.map(tag => slug(tag)).includes(tag))
    )
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  if (pathname === '/') {
    posts = posts.slice(0, 3)
  }

  return (
    <>
      {posts?.length ? (
        <div className='flex flex-col gap-4'>
          {posts.map(post => (
            <article
              key={post._id}
              className='relative flex transform rounded-sm bg-accent p-4 duration-150 ease-in hover:bg-accent/80'
            >
              <div className='flex flex-col gap-2 pr-4'>
                <h2 className='font-heading text-xl font-extrabold md:text-2xl'>
                  {post.title}
                </h2>
                {post.description && (
                  <p className='text-foreground-80'>{post.description}</p>
                )}
                {post.date && (
                  <time
                    dateTime={post.date}
                    className='block text-sm text-foreground-80'
                  >
                    {formatDate(post.date)}
                    <span>
                      &nbsp;&bull;&nbsp;{Math.round(post.readingTime.minutes)}
                      &nbsp;
                      {Math.round(post.readingTime.minutes) === 1
                        ? 'min'
                        : 'mins'}
                      &nbsp;read
                    </span>
                  </time>
                )}
              </div>
              <Link href={post.slug} className='absolute inset-0'>
                <span className='sr-only'>View post</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No post published.</p>
      )}
    </>
  )
}
