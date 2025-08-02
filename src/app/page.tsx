// C:\Users\User\Documents\ProyectosClaude\SharePay\src\app\page.tsx

import { Button } from '@/components/ui/button'
import { db } from '@/lib/db'
import { auth } from '@/lib/auth/config'
import { ShareIcon, CreditCardIcon, UserCheckIcon, LockIcon } from 'lucide-react'
import Link from 'next/link'

// Cache para evitar consultas repetidas durante el desarrollo
type DbStatus = 
  | { success: true; userCount: number; timestamp: number }
  | { success: false; error: string; timestamp: number }

let cachedDbStatus: DbStatus | null = null
const CACHE_DURATION = 30000 // 30 segundos

// Función server action para probar la conexión a la base de datos
async function testDatabaseConnection(): Promise<DbStatus> {
  // Verificar si tenemos un resultado cacheado válido
  if (cachedDbStatus && (Date.now() - cachedDbStatus.timestamp) < CACHE_DURATION) {
    return cachedDbStatus
  }

  try {
    const userCount = await db.user.count()
    const result: DbStatus = { success: true, userCount, timestamp: Date.now() }
    cachedDbStatus = result
    return result
  } catch (error) {
    console.error('Database connection error:', error)
    const result: DbStatus = { success: false, error: 'Failed to connect to database', timestamp: Date.now() }
    cachedDbStatus = result
    return result
  }
}

export default async function HomePage() {
  const dbStatus = await testDatabaseConnection()
  const session = await auth()

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Share Digital Resources Through
            <span className="text-primary block">Collaborative Payments</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Upload digital content, set a price, and let multiple users share the cost. 
            Content is unlocked only when the full amount is paid and verified.
          </p>
        </div>
        
        <div className="flex items-center justify-center gap-4">
          {session ? (
            <Link href="/dashboard">
              <Button size="lg" className="text-lg px-8">
                Go to Dashboard
              </Button>
            </Link>
          ) : (
            <Link href="/auth/signin">
              <Button size="lg" className="text-lg px-8">
                Get Started - Sign In
              </Button>
            </Link>
          )}
          <Button variant="outline" size="lg" className="text-lg px-8" asChild>
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center space-y-4">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <ShareIcon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold">Collaborative Sharing</h3>
          <p className="text-sm text-muted-foreground">
            Multiple users can contribute to the total cost of digital resources
          </p>
        </div>

        <div className="text-center space-y-4">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <CreditCardIcon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold">Secure Payments</h3>
          <p className="text-sm text-muted-foreground">
            Powered by Stripe for safe and reliable payment processing
          </p>
        </div>

        <div className="text-center space-y-4">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <UserCheckIcon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold">Secure Authentication</h3>
          <p className="text-sm text-muted-foreground">
            Sign in securely with GitHub or Google OAuth for a seamless experience
          </p>
        </div>

        <div className="text-center space-y-4">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <LockIcon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold">Protected Access</h3>
          <p className="text-sm text-muted-foreground">
            Your dashboard and personal data are protected with enterprise-grade security
          </p>
        </div>
      </section>

      {/* System Status Section */}
      <section className="bg-card border rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">System Status - Phase 1</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
            <div>
              <h3 className="font-medium">Database Connection</h3>
              <p className="text-sm text-muted-foreground">Neon PostgreSQL Status</p>
            </div>
            <div className="text-right">
              {dbStatus.success ? (
                <div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-green-700">Connected</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Users: {dbStatus.userCount}</p>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm font-medium text-red-700">Error</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
            <div>
              <h3 className="font-medium">Authentication System</h3>
              <p className="text-sm text-muted-foreground">GitHub & Google OAuth Status</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-green-700">Active</span>
              </div>
              {session && (
                <p className="text-xs text-muted-foreground">Signed in: {session.user?.name}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 bg-secondary rounded-lg">
              <h4 className="font-medium">Next.js 15</h4>
              <p className="text-sm text-muted-foreground">App Router & RSC</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs">Ready</span>
              </div>
            </div>

            <div className="p-4 bg-secondary rounded-lg">
              <h4 className="font-medium">Auth.js v5</h4>
              <p className="text-sm text-muted-foreground">Authentication</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs">Ready</span>
              </div>
            </div>

            <div className="p-4 bg-secondary rounded-lg">
              <h4 className="font-medium">TailwindCSS</h4>
              <p className="text-sm text-muted-foreground">Styling System</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs">Ready</span>
              </div>
            </div>

            <div className="p-4 bg-secondary rounded-lg">
              <h4 className="font-medium">Prisma ORM</h4>
              <p className="text-sm text-muted-foreground">Database Schema</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs">Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Roadmap */}
      <section className="bg-card border rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Development Roadmap</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="font-medium">Phase 0</span>
            <span className="text-sm text-muted-foreground">Minimal Architecture + Database Connection</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="font-medium">Phase 1</span>
            <span className="text-sm text-muted-foreground">Authentication System + Database Structure</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <span className="font-medium">Phase 2</span>
            <span className="text-sm text-muted-foreground">Product Creation Form</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <span className="font-medium">Phase 3</span>
            <span className="text-sm text-muted-foreground">Stripe Integration + Collaborative Payments</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <span className="font-medium">Phase 4</span>
            <span className="text-sm text-muted-foreground">Auto-unlock Logic</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <span className="font-medium">Phase 5</span>
            <span className="text-sm text-muted-foreground">Content Verification System</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <span className="font-medium">Phase 6</span>
            <span className="text-sm text-muted-foreground">User Dashboard + Verifier Panel</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <span className="font-medium">Phase 7</span>
            <span className="text-sm text-muted-foreground">Security Enhancements + UX Polish</span>
          </div>
        </div>
      </section>
    </div>
  )
}