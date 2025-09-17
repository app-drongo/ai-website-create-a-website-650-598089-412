import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Acme SaaS',
  description: 'Elevate your business with our cutting-edge SaaS platform.',
  keywords: ['saas', 'software', 'technology', 'app', 'modern'],
  openGraph: {
    title: 'Acme SaaS',
    description: 'Elevate your business with our cutting-edge SaaS platform.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}