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
      <div className='container pt-16 md:max-w-5xl space-y-4'>
        <div className='md:space-y-4'>
          <h1 className='font-heading text-3xl tracking-tight md:text-4xl'>
            Blog
          </h1>
          <p className='text-lg text-foreground-80 md:text-xl'>
            I write about various topics that interest me, especially exploring
            the latest trends and advancements in web development and the
            intricacies of Linux operating systems.
          </p>
        </div>
      <BlogCard />
      </div>
    </div>
  )
}
