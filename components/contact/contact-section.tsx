'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { contactFormSchema } from '@/lib/validation'
import { useRef } from 'react'

export function ContactSection() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    mode: 'onChange'
  })

  const lastSentTimeRef = useRef<Date | null>(null)
  const messageCountRef = useRef<number>(0)
  const { toast } = useToast()

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    if (messageCountRef.current >= 1) {
      toast({
        description: 'You can only send one message every hour',
        variant: 'destructive'
      })
      return
    }

    const currentTime = new Date()
    if (
      lastSentTimeRef.current &&
      currentTime.getTime() - lastSentTimeRef.current.getTime() < 3600000
    ) {
      toast({
        description:
          'Please wait a few moments before sending another message.',
        variant: 'destructive'
      })
      return
    }

    await fetch('api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message
      })
    })

    lastSentTimeRef.current = currentTime
    messageCountRef.current += 1
    form.reset()
    toast({ description: 'The message was sent successfully!' })
  }

  return (
    <section className='flex flex-col items-center justify-center'>
      <h2 className='mt-12 mb-4 font-heading text-3xl md:mb-8 md:text-4xl'>
        Contact
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='text-center w-[32rem] space-y-4'
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='Your name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='Email address' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='subject'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='Subject' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder='Message' className='h-32' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' size='lg'>Send</Button>
        </form>
      </Form>
      <Toaster />
    </section>
  )
}
