import Link from 'next/link'
import Image from 'next/image'
import { Github, Link as LinkIcon } from 'lucide-react'
import { projects } from '@/config/projects'
import { Badge } from '@/components/ui/badge'
import * as motion from '@/lib/motion'
import { RevealAnimation } from '@/lib/motion'

export function ProjectCard() {
  return (
    <motion.div
      variants={RevealAnimation}
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true }}
      className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'
    >
      {projects.map((project, index) => {
        return (
          <div
            key={index}
            className='flex flex-row-reverse rounded-sm bg-accent md:flex-col md:rounded-b-sm'
          >
            <div className='flex w-1/4 items-center justify-end md:w-full'>
              <Image
                src={project.coverImage}
                width={720}
                height={330}
                alt='project-screenshot'
                className='mx-4 rounded-t-sm md:mx-0'
              />
            </div>
            <div className='flex w-3/4 flex-col p-4 md:h-48 md:w-full md:justify-between'>
              <p className='font-heading text-lg font-bold'>{project.name}</p>
              <p className='text-foreground-80'>{project.description}</p>
              <div className='flex gap-2 py-2'>
                <Link href={project.githubUrl}>
                  <div className='flex items-center text-sm hover:text-foreground-80'>
                    <Github width={16} height={16} className='mr-1' />
                    Github
                  </div>
                </Link>
                {project.previewUrl && (
                  <Link href={project.previewUrl}>
                    <div className='flex items-center text-sm hover:text-foreground-80'>
                      <LinkIcon width={16} height={16} className='mr-1' />
                      Preview
                    </div>
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
    </motion.div>
  )
}
