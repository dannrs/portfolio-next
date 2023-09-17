import Link from 'next/link'
import { Github, Link as LinkIcon } from 'lucide-react'
import { projects } from '@/config/projects'
import { Button } from './ui/button'

export function ProjectCard() {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {projects.map((project, index) => {
        return (
          <div key={index} className='flex flex-col rounded-sm bg-accent'>
            <div className='flex w-full flex-col space-y-2 p-4 md:h-52'>
              <p className='font-heading text-lg font-bold'>{project.name}</p>
              <p className='text-foreground-80'>{project.description}</p>
              <div className='flex gap-2'>
                <Button
                  variant='ghost'
                  className='transform border duration-150 ease-in hover:bg-foreground hover:text-background'
                  size='sm'
                >
                  <Link
                    href={project.githubUrl}
                    aria-label='Github repository of the project'
                  >
                    <div className='flex items-center text-sm'>
                      <Github width={16} height={16} className='mr-1' />
                      Github
                    </div>
                  </Link>
                </Button>
                {project.previewUrl && (
                  <Button
                    variant='ghost'
                    className='transform border duration-150 ease-in hover:bg-foreground hover:text-background'
                    size='sm'
                  >
                    <Link
                      href={project.previewUrl}
                      aria-label='Preview site of the project'
                    >
                      <div className='flex items-center text-sm'>
                        <LinkIcon width={16} height={16} className='mr-1' />
                        Preview
                      </div>
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
