'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import * as motion from '@/lib/motion'
import { RevealAnimation } from '@/lib/motion'
import { formatDate } from '@/lib/utils'

export default function BlogCard() {
  const pathname = usePathname()
  let posts = allPosts
    .filter(post => post.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  if (pathname === '/') {
    posts = posts.slice(0, 3)
  }

  return (
    <>
      {posts?.length ? (
        <motion.div
          variants={RevealAnimation}
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ once: true }}
          className='flex flex-col gap-4'
        >
          {posts.map((post, index) => (
            <article
              key={post._id}
              className='relative flex transform flex-row justify-between rounded-sm bg-accent p-4 duration-150 ease-in hover:bg-accent/80'
            >
              <div className='flex w-3/4 flex-col gap-2 pr-4'>
                <h2 className='font-heading text-xl font-extrabold md:text-2xl'>
                  {post.title}
                </h2>
                {post.description && (
                  <p className='text-foreground-80'>{post.description}</p>
                )}
                {post.authors && post.date && (
                  <p className='text-sm'>
                    <span className='text-foreground-80'>by</span>
                    <span className='font-semibold'>
                      &nbsp;{post.authors}&nbsp;
                    </span>
                    <span className='text-sm text-foreground-80'>
                      on {formatDate(post.date)}
                    </span>
                  </p>
                )}
              </div>
              {post.image && (
                <div className='flex w-1/4 items-center justify-end'>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={200}
                    height={110}
                    className='rounded-md border bg-background dark:bg-foreground'
                    priority={index <= 1}
                  />
                </div>
              )}
              <Link href={post.slug} className='absolute inset-0'>
                <span className='sr-only'>View post</span>
              </Link>
            </article>
          ))}
        </motion.div>
      ) : (
        <p>No post published.</p>
      )}
    </>
  )
}
