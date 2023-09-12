import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text
} from '@react-email/components'
import * as React from 'react'
import * as z from 'zod'
import { contactFormSchema } from '@/lib/validations/contact'

export default function EmailTemplate({
  name,
  email,
  message
}: z.infer<typeof contactFormSchema>) {
  return (
    <Html>
      <Head>
        <title>New Message</title>
      </Head>
      <Preview>You received a new message</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Message from {name}</Heading>
          <Text style={{ ...text, marginBottom: '14px' }}>{message}</Text>
          <Text style={footer}>
            {name}
            {' <'}
            {email}
            {'> '}
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#01010F',
  margin: '40px 0'
}

const container = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto'
}

const h1 = {
  color: '#E6E6E7',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '40px',
  padding: '0'
}

const text = {
  color: '#E6E6E7',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  margin: '24px 0'
}

const footer = {
  color: '#898989',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '12px',
  lineHeight: '22px',
  marginTop: '12px',
  marginBottom: '24px'
}
