import Link from 'next/link'
import Image from 'next/image'
import { Github, Link as LinkIcon } from 'lucide-react'
import { projects } from '@/config/projects'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function ProjectSection() {
  return (
    <section className='border-t border-t-muted'>
      <div className='container pt-4 md:w-60 md:pt-8 '>
        <h2 className='mb-4 font-heading text-3xl md:mb-8 md:text-4xl'>
          Overview
        </h2>
        <p className='pb-8 text-foreground/80 md:pb-12'>
          I am a software developer specializing in web development. I have
          extensive experience building web applications using JavaScript and
          Typescript, especially the React library and Next.js framework. I am
          constantly driven to expand my knowledge and explore cutting-edge
          technologies. This allows me to build scalable, high-performance web
          applications with seamless user experiences.
        </p>
        <h2 className='mb-4 font-heading text-3xl md:mb-8 md:text-4xl'>
          Projects
        </h2>
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
                  <p className='font-heading text-lg font-bold'>
                    {project.name}
                  </p>
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
        <Link href='/projects'>
          <Button variant='link' className='pt-4 text-base'>
            See all projects &#129042;
          </Button>
        </Link>
      </div>
    </section>
  )
}
