import { skills } from '@/config/skills'
import { Button } from './ui/button'

export function SkillSection() {
  return (
    <section className='flex w-screen items-start justify-center'>
      <div className='container md:w-60'>
        <h2 className='mb-4 font-heading text-3xl md:mb-8 md:text-4xl'>
          Skills
        </h2>
        <div className='grid grid-cols-2 gap-2 lg:grid-cols-4 xl:gap-4'>
          {skills.map((skill, index) => {
            const Icon = skill.Icon
            return (
              <Button
                key={index}
                variant='ghost'
                size='xl'
                className='flex cursor-default items-center justify-start gap-2 rounded-sm border'
              >
                <Icon className='h-6 w-6' />
                <p>{skill.name}</p>
              </Button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
