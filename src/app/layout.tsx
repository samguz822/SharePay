// C:\Users\User\Documents\ProyectosClaude\SharePay\src\app\layout.tsx

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { auth } from '@/lib/auth/config'
import { Button } from '@/components/ui/button'
import { signOut } from '@/lib/auth/config'
import { UserIcon } from 'lucide-react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SharePay - Collaborative Payment Platform',
  description: 'Share digital resources through collaborative micropayments with content verification',
  metadataBase: new URL('https://sharepay.vercel.app'),
  authors: [{ name: 'SharePay Team' }],
  creator: 'SharePay',
  publisher: 'SharePay',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          <header className="border-b">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Link href="/">
                    <h1 className="text-2xl font-bold text-primary">SharePay</h1>
                  </Link>
                  <span className="text-sm text-muted-foreground">
                    Collaborative Payment Platform
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <nav className="hidden md:flex items-center space-x-4">
                    <Link href="/" className="text-sm hover:text-primary transition-colors">Home</Link>
                    <Link href="/about" className="text-sm hover:text-primary transition-colors">About</Link>
                    {session && (
                      <Link href="/dashboard" className="text-sm hover:text-primary transition-colors">Dashboard</Link>
                    )}
                  </nav>
                  
                  {session ? (
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        {session.user?.image ? (
                          <Image 
                            src={session.user.image} 
                            alt={session.user.name || 'User'} 
                            width={24}
                            height={24}
                            className="w-6 h-6 rounded-full"
                          />
                        ) : (
                          <UserIcon className="w-6 h-6 text-gray-400" />
                        )}
                        <span className="text-sm text-gray-700">
                          {session.user?.name?.split(' ')[0] || 'User'}
                        </span>
                      </div>
                      <form
                        action={async () => {
                          "use server"
                          await signOut({ redirectTo: "/" })
                        }}
                      >
                        <Button type="submit" variant="outline" size="sm">
                          Sign Out
                        </Button>
                      </form>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Link href="/auth/signin">
                        <Button size="sm">
                          Sign In
                        </Button>
                      </Link>
                    </div>
                  )}
                  
                  <span className="text-sm bg-secondary px-2 py-1 rounded">
                    Phase 1 - Authentication
                  </span>
                </div>
              </nav>
            </div>
          </header>
          
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
          
          <footer className="border-t mt-auto">
            <div className="container mx-auto px-4 py-6">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <p>&copy; 2024 SharePay. All rights reserved.</p>
                <p>Built with Next.js 15 & Neon PostgreSQL</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}