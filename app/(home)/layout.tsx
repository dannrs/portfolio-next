import { navigationRoutes } from '@/config/navigation'
import { NavigationBar } from '@/components/navigation-bar'
import { Footer } from '@/components/footer'
import ScrollToTopButton from '@/components/scroll-to-top'

interface IndexLayoutProps {
  children: React.ReactNode
}

export default function IndexLayout({ children }: IndexLayoutProps) {
  return (
    <div className='flex min-h-screen flex-col'>
      <NavigationBar items={navigationRoutes.navItem} />
      <main className='flex-1'>{children}</main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
