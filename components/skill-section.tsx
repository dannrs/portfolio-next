import { skills } from '@/config/skills'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function SkillSection() {
  return (
    <section className='container space-y-6 md:max-w-5xl'>
      <h2 className='font-heading text-3xl md:text-4xl'>Skills</h2>
      <div className='grid grid-cols-2 gap-2 lg:grid-cols-4 xl:gap-4'>
        {skills.map((skill, index) => {
          const Icon = skill.Icon
          return (
            <div
              key={index}
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'xl' }),
                'flex cursor-default items-center justify-start gap-2 rounded-sm border',
                'transform duration-150 ease-in'
              )}
            >
              <Icon className='h-6 w-6' />
              <p>{skill.name}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
