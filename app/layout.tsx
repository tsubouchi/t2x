import './globals.css'
import { Inter } from 'next/font/google'
import { AuthWrapper } from '@/components/auth-wrapper'
import { Header } from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 't2x',
  description: 'Slides sharing platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-black">
      <body className={inter.className}>
        <AuthWrapper>
          <div className="min-h-screen flex flex-col bg-black text-white">
            <Header />
            {children}
          </div>
        </AuthWrapper>
      </body>
    </html>
  )
}