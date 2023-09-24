import Link from 'next/link'
import { Button } from '@/components/ui/button'
import BlogCard from '@/components/blog-card'
import { MoveRight } from 'lucide-react'

export async function WritingSection() {
  return (
    <section className='container space-y-6 md:max-w-5xl'>
      <h2 className='font-heading text-3xl md:text-4xl'>Writing</h2>
      <BlogCard />
      <Link href='/blog'>
        <Button variant='ghost' className='mt-4 text-base font-semibold'>
          Read all posts&nbsp;
          <MoveRight className='h-4 w-4' />
        </Button>
      </Link>
    </section>
  )
}
