// C:\Users\User\Documents\ProyectosClaude\SharePay\src\app\auth\signin\page.tsx

import { Suspense } from 'react'
import { Button } from '@/components/ui/button'
import { signIn, auth } from '@/lib/auth/config'
import { redirect } from 'next/navigation'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

async function SignInPage() {
  const session = await auth()
  
  // Si ya está autenticado, redirigir al dashboard
  if (session) {
    redirect('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Link href="/" className="flex justify-center">
            <h2 className="text-3xl font-bold text-primary">SharePay</h2>
          </Link>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Welcome back! Please sign in to continue using SharePay.
          </p>
        </div>
        
        <div className="space-y-4">
          {/* GitHub Sign In */}
          <form
            action={async () => {
              "use server"
              await signIn("github", { redirectTo: "/dashboard" })
            }}
            className="w-full"
          >
            <Button type="submit" className="w-full flex items-center justify-center gap-3" variant="outline">
              <GitHubLogoIcon className="w-5 h-5" />
              Continue with GitHub
            </Button>
          </form>

          {/* Google Sign In */}
          <form
            action={async () => {
              "use server"
              await signIn("google", { redirectTo: "/dashboard" })
            }}
            className="w-full"
          >
            <Button type="submit" className="w-full flex items-center justify-center gap-3" variant="outline">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </Button>
          </form>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-gray-50 px-2 text-gray-500">Or</span>
            </div>
          </div>
          
          <Link href="/">
            <Button variant="ghost" className="w-full">
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-500">
            By signing in, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function SignInPageWithSuspense() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignInPage />
    </Suspense>
  )
}