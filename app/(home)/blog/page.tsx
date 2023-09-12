import BlogCard from '@/components/blog-card'

export const metadata = {
  title: 'Blog'
}

export default async function BlogPage() {
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
