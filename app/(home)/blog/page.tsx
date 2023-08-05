import Image from 'next/image'
import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { formatDate } from '@/lib/utils'

export const metadata = {
  title: 'Blog'
}

export default async function BlogPage() {
  const posts = allPosts
    .filter(post => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='container pt-16 md:max-w-5xl'>
        <div className='space-y-2 md:space-y-4'>
          <h1 className='font-heading text-3xl tracking-tight md:text-4xl'>
            Blog
          </h1>
          <p className='text-lg text-foreground-80 md:text-xl'>
            I write about various topics that interest me, especially exploring
            the latest trends and advancements in web development and the
            intricacies of Linux operating systems.
          </p>
        </div>
        {posts?.length ? (
          <div className='my-8 flex flex-col gap-4'>
            {posts.map((post, index) => (
              <article
                key={post._id}
                className='relative flex justify-between rounded-sm bg-accent p-4'
              >
                <div className='flex w-2/3 flex-col gap-2'>
                  <h2 className='font-heading text-xl md:text-2xl'>
                    <Link href={post.slug} className='hover:text-foreground-80'>
                      {post.title}
                    </Link>
                  </h2>
                  {post.description && (
                    <p className='text-foreground-80'>{post.description}</p>
                  )}
                  {post.authors && post.date && (
                    <p className='text-sm'>
                      <span className='text-foreground-80'>by</span>{' '}
                      <Link href='/about' className='hover:text-foreground-80'>
                        {post.authors}
                      </Link>{' '}
                      <span className='text-sm text-foreground-80'>
                        on {formatDate(post.date)}
                      </span>
                    </p>
                  )}
                </div>
                {post.image && (
                  <div className='flex w-1/3 items-center justify-end'>
                    <Link href={post.slug}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={200}
                        height={110}
                        className='rounded-md border bg-foreground hover:bg-foreground-80'
                        priority={index <= 1}
                      />
                    </Link>
                  </div>
                )}
              </article>
            ))}
          </div>
        ) : (
          <p>No post published.</p>
        )}
      </div>
    </div>
  )
}
