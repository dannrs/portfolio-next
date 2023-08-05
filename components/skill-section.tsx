'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { RevealAnimation } from '@/lib/motion'
import { skills } from '@/config/skills'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function SkillSection() {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <section className='flex w-screen items-start justify-center'>
      <div className='container md:max-w-5xl'>
        <h2 className='mb-4 font-heading text-3xl md:mb-8 md:text-4xl'>
          Skills
        </h2>
        <div className='grid grid-cols-2 gap-2 lg:grid-cols-4 xl:gap-4'>
          {skills.map((skill, index) => {
            const Icon = skill.Icon
            return (
              <motion.div
                ref={ref}
                variants={RevealAnimation}
                initial={'hidden'}
                whileInView={'visible'}
                viewport={{ once: true }}
                key={index}
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'xl' }),
                  'flex cursor-default items-center justify-start gap-2 rounded-sm border',
                  'transform duration-150 ease-in'
                )}
              >
                <Icon className='h-6 w-6' />
                <p>{skill.name}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
