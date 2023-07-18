import { ContactForm } from '@/components/contact/contact-form'

export function ContactSection() {
  return (
    <section className='container flex flex-col items-center justify-center md:w-60 space-y-2 md:space-y-0'>
      <h2 className='mb-4 pt-8 md:mt-12 font-heading text-3xl md:mb-8 md:text-4xl'>
        Contact
      </h2>
      <div className='w-full md:w-fit'>
      <ContactForm />
</div>
    </section>
  )
}
