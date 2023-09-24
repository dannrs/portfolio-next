import '@/styles/globals.css'
import { Inter, Barlow } from 'next/font/google'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'

const fontSans = Inter({ subsets: ['latin'], variable: '--font-sans' })
const fontHeading = Barlow({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-heading'
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL as string),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: ['React', 'Next.js', 'Tailwind CSS', 'Web Development'],
  authors: [
    {
      name: 'danniramdhani',
      url: 'https://danni.my.id'
    }
  ],
  creator: 'danniramdhani',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.png`],
    creator: '@dannrs__'
  },
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontHeading.variable
        )}
      >
          <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
            {children}
          </ThemeProvider>
      </body>
    </html>
  )
}
