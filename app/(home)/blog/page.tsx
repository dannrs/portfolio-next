import Image from 'next/image'
import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { formatDate } from '@/lib/utils'
import BlogCard from '@/components/blog-card'

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
      <div className='container space-y-4 pt-16 md:max-w-5xl'>
        <div className='space-y-4'>
          <h1 className='font-heading text-3xl tracking-tight md:text-4xl'>
            Blog
          </h1>
          <p className='text-lg text-foreground-80'>
            I mostly share what I have learned and experienced on my journey as
            a developer.
          </p>
        </div>
        <BlogCard />
      </div>
    </div>
  )
}
