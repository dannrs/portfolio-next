import { ContactSection } from '@/components/contact/contact-section'
import { HeroSection } from '@/components/hero-section'
import { ProjectSection } from '@/components/project-section'
import { SkillSection } from '@/components/skill-section'
import { WritingSection } from '@/components/writing-section'

export default function Index() {
  return (
    <div className='flex flex-col gap-8 md:gap-12 pb-12'>
      <HeroSection />
      <ProjectSection />
      <WritingSection />
      <SkillSection />
      <ContactSection />
    </div>
  )
}
