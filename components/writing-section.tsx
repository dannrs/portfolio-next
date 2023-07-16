import Image from 'next/image'
import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { formatDate } from '@/lib/utils'
import { Button } from './ui/button'

export async function WritingSection() {
  const posts = allPosts
    .filter(post => post.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 3)

  return (
    <section className='flex flex-col items-center justify-center'>
      <div className='container md:w-60'>
        <h2 className='mb-4 font-heading text-3xl md:mb-8 md:text-4xl'>
          Writing
        </h2>
        {posts?.length ? (
          <div className='flex flex-col gap-6 md:gap-4'>
            {posts.map((post, index) => (
              <article
                key={post._id}
                className='relative flex flex-row justify-between rounded-sm bg-accent p-4'
              >
                <div className='flex w-3/4 flex-col gap-2 pr-4'>
                  <h2 className='font-heading text-xl font-extrabold md:text-2xl'>
                    <Link href={post.slug} className='hover:text-foreground-80'>{post.title}</Link>
                  </h2>
                  {post.description && (
                    <p className='text-foreground-80'>{post.description}</p>
                  )}
                  {post.authors && post.date && (
                    <p className='text-sm'>
                      <span className='text-foreground-80'>by</span>{' '}
                      <Link href='/about' className='hover:text-foreground-80'>{post.authors}</Link>{' '}
                      <span className='text-sm text-foreground-80'>
                        on {formatDate(post.date)}
                      </span>
                    </p>
                  )}
                </div>
                {post.image && (
                  <div className='flex w-1/4 items-center justify-end'>
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
        <Link href='/blog'>
          <Button variant='link' className='pt-4 text-base'>
            Read all posts &#129042;
          </Button>
        </Link>
      </div>
    </section>
  )
}
