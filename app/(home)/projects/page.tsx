import Link from 'next/link'
import Image from 'next/image'
import { Github, Link as LinkIcon } from 'lucide-react'
import { projects } from '@/config/projects'
import { Badge } from '@/components/ui/badge'

export default function Projects() {
  return (
    <div className='container pt-16 md:w-60'>
      <div className='space-y-4 pb-4'>
        <h1 className='font-heading text-3xl tracking-tight md:text-4xl'>
          My Projects
        </h1>
        <p className='text-lg text-foreground-80 md:text-xl'>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
      </div>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4 lg:grid-cols-3'>
        {projects.map((project, index) => {
          return (
            <div key={index} className='flex flex-col'>
              <Image
                src={project.coverImage}
                width={720}
                height={720}
                alt='project-screenshot'
                className='rounded-t-sm'
              />
              <div className='flex flex-col rounded-b-sm bg-accent p-4 md:h-48 md:justify-between'>
                <p className='font-heading text-lg font-bold'>{project.name}</p>
                <p className='text-foreground/80'>{project.description}</p>
                <div className='flex gap-2 py-2'>
                  <Link href={project.githubUrl}>
                    <Github width={16} height={16} />
                  </Link>
                  {project.previewUrl && (
                    <Link href={project.previewUrl}>
                      <LinkIcon width={16} height={16} />
                    </Link>
                  )}
                </div>
                <div className='flex gap-2'>
                  {project.tools!.map((tool, index) => {
                    return (
                      <Badge key={index} variant='outline'>
                        {tool}
                      </Badge>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
