'use client'

import { ContactSection } from '@/components/contact/contact-section'

export default function Contact() {
  return (
    <div className='container pt-16 md:w-60'>
      <div className='space-y-4 pb-4'>
        <h1 className='font-heading text-3xl tracking-tight md:text-4xl'>
          Contact me
        </h1>
        <p className='text-lg text-foreground-80 md:text-xl'>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
      </div>
      <ContactSection />
    </div>
  )
}
