// C:\Users\User\Documents\ProyectosClaude\SharePay\src\app\dashboard\page.tsx

import { Suspense } from 'react'
import { auth, signOut } from '@/lib/auth/config'
import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { PlusIcon, CreditCardIcon, DownloadIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

async function DashboardPage() {
  const session = await auth()
  
  if (!session?.user) {
    redirect('/auth/signin')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <h1 className="text-2xl font-bold text-primary">SharePay</h1>
              </Link>
              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                Phase 1 - Authentication
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {session.user.image ? (
                  <Image 
                    src={session.user.image} 
                    alt={session.user.name || 'User'} 
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <UserIcon className="w-8 h-8 text-gray-400" />
                )}
                <span className="text-sm text-gray-700">
                  {session.user.name || session.user.email}
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
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {session.user.name?.split(' ')[0] || 'User'}!
          </h1>
          <p className="text-gray-600">
            Manage your shared digital resources and collaborative payments.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
            <div className="flex items-center">
              <PlusIcon className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Create Product</h3>
                <p className="text-sm text-gray-600">Share a new digital resource</p>
              </div>
            </div>
            <Button className="mt-4 w-full" disabled>
              Coming in Phase 2
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
            <div className="flex items-center">
              <CreditCardIcon className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">My Payments</h3>
                <p className="text-sm text-gray-600">View payment history</p>
              </div>
            </div>
            <Button className="mt-4 w-full" variant="outline" disabled>
              Coming in Phase 3
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-500">
            <div className="flex items-center">
              <DownloadIcon className="h-8 w-8 text-purple-500" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Downloads</h3>
                <p className="text-sm text-gray-600">Access purchased content</p>
              </div>
            </div>
            <Button className="mt-4 w-full" variant="outline" disabled>
              Coming in Phase 4
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Account Overview
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">0</div>
              <div className="text-sm text-gray-600">Products Shared</div>
            </div>
            
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">$0</div>
              <div className="text-sm text-gray-600">Total Earned</div>
            </div>
            
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">0</div>
              <div className="text-sm text-gray-600">Purchases</div>
            </div>
            
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">0</div>
              <div className="text-sm text-gray-600">Downloads</div>
            </div>
          </div>
        </div>

        {/* Development Status */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">
            🎉 Phase 1 Complete: Authentication System
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium text-blue-800 mb-2">✅ Implemented:</h4>
              <ul className="space-y-1 text-blue-700">
                <li>• GitHub & Google OAuth</li>
                <li>• Secure user sessions</li>
                <li>• Protected dashboard</li>
                <li>• User profile display</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-800 mb-2">🔄 Coming Next (Phase 2):</h4>
              <ul className="space-y-1 text-blue-700">
                <li>• Product creation form</li>
                <li>• File upload system</li>
                <li>• Price setting</li>
                <li>• Product management</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default function DashboardPageWithSuspense() {
  return (
    <Suspense fallback={<div>Loading dashboard...</div>}>
      <DashboardPage />
    </Suspense>
  )
}