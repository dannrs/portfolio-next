import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ProjectCard } from '@/components/project-card'
import OverviewSection from '@/components/overview-section'
import { MoveRight } from 'lucide-react'

export function ProjectSection() {
  return (
    <section className='pt-8' id='overview'>
      <div className='container space-y-4 border-t pt-4 md:max-w-5xl md:pt-8'>
        <OverviewSection />
        <h2 className='pt-4 font-heading text-3xl md:pt-8 md:text-4xl'>
          Projects
        </h2>
        <ProjectCard />
        <Link href='/projects'>
          <Button variant='ghost' className='mt-4 text-base font-semibold'>
            See all projects&nbsp;
            <MoveRight className='h-4 w-4' />
          </Button>
        </Link>
      </div>
    </section>
  )
}
