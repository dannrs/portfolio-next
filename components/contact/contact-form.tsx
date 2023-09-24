'use client'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'
import { contactFormSchema } from '@/lib/validations/contact'

export function ContactForm() {
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
    <div className='w-full md:w-fit'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-4 md:w-[32rem]'
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder='John Doe' {...field} />
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='john.doe@foo.bar' {...field} />
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
                <FormLabel>Subject</FormLabel>
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
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Your message'
                    className='h-32'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' size='lg'>
            Send
          </Button>
        </form>
      </Form>
      <Toaster />
    </div>
  )
}
