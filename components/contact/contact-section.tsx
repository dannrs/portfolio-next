import { ContactForm } from '@/components/contact/contact-form'

export function ContactSection() {
  return (
    <section className='container flex flex-col items-center md:max-w-5xl'>
      <h2 className='pt-8 font-heading text-3xl md:text-4xl'>Contact</h2>
      <ContactForm />
    </section>
  )
}
