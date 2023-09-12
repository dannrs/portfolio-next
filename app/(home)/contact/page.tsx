import { ContactForm } from '@/components/contact/contact-form'

export const metadata = {
  title: 'Contact'
}

export default function ContactPage() {
  return (
    <div className='container pb-8 pt-16 md:max-w-5xl'>
      <div className='space-y-4'>
        <h1 className='font-heading text-3xl tracking-tight md:text-4xl'>
          Contact me
        </h1>
        <p className='pb-2 text-lg text-foreground-80'>
          Please feel free to contact me if you have any questions, whether
          it&apos;s about work (I&apos;m available for hire!) or anything else
          you&apos;d like to discuss.
        </p>
        <ContactForm />
      </div>
    </div>
  )
}
