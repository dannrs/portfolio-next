import '@/styles/globals.css'
import { Inter, Barlow } from 'next/font/google'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'

const fontSans = Inter({ subsets: ['latin'], variable: '--font-sans' })
const fontHeading = Barlow({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-heading'
})

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: ['React', 'Next.js', 'Tailwind CSS', 'Linux'],
  authors: [
    {
      name: 'danniramdhani',
      url: 'https://danni.my.id'
    }
  ],
  creator: 'danniramdhani'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
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
