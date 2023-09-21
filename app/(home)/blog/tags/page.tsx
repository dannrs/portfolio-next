import Link from 'next/link'
import { slug } from 'github-slugger'
import { tags, tagCounts } from '@/lib/content'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function TagsPage() {
  
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='container space-y-4 pt-16 md:max-w-5xl'>
        <div className='space-y-4'>
          <h1 className='font-heading text-3xl tracking-tight md:text-4xl pb-4'>
            Tags
          </h1>
          <div className='flex flex-row flex-wrap justify-start gap-2'>
          {tags.map(tag => (

              <Link
              key={tag}
                href={`/blog/tags/${slug(
                  tag as string
                )}`}
                className={cn(
                    buttonVariants({ variant: 'ghost', size: 'sm' }),
                    'cursor-pointer rounded-sm border',
                    'transform duration-150 ease-in'
                  )}
              >
                {tag} ({tag ? tagCounts[tag] : 0})
              </Link>

          ))}
        </div>
        </div>
      </div>
    </div>
  )
}
