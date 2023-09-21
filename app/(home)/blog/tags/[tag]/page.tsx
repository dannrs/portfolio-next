// app/(home)/blog/tags/[tag]/page.tsx
import BlogCard from '@/components/blog-card'
import { tagCounts, tags } from '@/lib/content'
import { slug } from 'github-slugger'

interface Props {
  params: {
    tag: string
  }
}

export default function TagPage({ params }: Props) {
  const tagName = tags.find(tag => slug(tag as string) === params.tag)
  const tagCount = tagName ? tagCounts[tagName] || 0 : 0;
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='container space-y-4 pt-16 md:max-w-5xl'>
        <div className='space-y-4'>
          <h1 className='pb-4 font-heading text-3xl tracking-tight md:text-4xl'>
            {tagName} <span className='text-lg'>{tagCount}</span>
          </h1>
          <BlogCard tag={params.tag} />
        </div>
      </div>
    </div>
  )
}
