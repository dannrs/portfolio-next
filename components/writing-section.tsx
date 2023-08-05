import Link from 'next/link'
import { Button } from './ui/button'
import BlogCard from './blog-card'

export async function WritingSection() {
  return (
    <section className='flex flex-col items-center justify-center'>
      <div className='container space-y-4 md:max-w-5xl'>
        <h2 className='font-heading text-3xl md:text-4xl'>Writing</h2>
        <BlogCard />
        <Link href='/blog'>
          <Button variant='ghost' className='mt-4 text-base font-semibold'>
            Read all posts &#129042;
          </Button>
        </Link>
      </div>
    </section>
  )
}
