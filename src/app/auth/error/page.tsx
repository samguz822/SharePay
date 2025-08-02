// C:\Users\User\Documents\ProyectosClaude\SharePay\src\app\auth\error\page.tsx

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { AlertCircleIcon } from 'lucide-react'
import { Suspense } from 'react'

type Props = {
  searchParams: Promise<{ error?: string }>
}

async function AuthErrorContent({ searchParams }: Props) {
  const params = await searchParams
  const error = params.error

  const getErrorMessage = (error: string | undefined) => {
    switch (error) {
      case 'Configuration':
        return 'There is a problem with the server configuration.'
      case 'AccessDenied':
        return 'Access denied. You do not have permission to sign in.'
      case 'Verification':
        return 'The verification token has expired or has already been used.'
      case 'OAuthSignin':
        return 'Error in constructing an authorization URL.'
      case 'OAuthCallback':
        return 'Error in handling the response from an OAuth provider.'
      case 'OAuthCreateAccount':
        return 'Could not create an OAuth account.'
      case 'EmailCreateAccount':
        return 'Could not create an email account.'
      case 'Callback':
        return 'Error in the OAuth callback handler route.'
      case 'OAuthAccountNotLinked':
        return 'The email on the account is already linked, but not with this OAuth account.'
      case 'EmailSignin':
        return 'Sending the e-mail with the verification token failed.'
      case 'CredentialsSignin':
        return 'The authorize callback returned null in the Credentials provider.'
      case 'SessionRequired':
        return 'The content of this page requires you to be signed in at all times.'
      default:
        return 'An unknown error occurred during authentication.'
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="flex justify-center">
            <h2 className="text-3xl font-bold text-primary">SharePay</h2>
          </Link>
          
          <div className="mt-8 flex justify-center">
            <AlertCircleIcon className="h-12 w-12 text-red-500" />
          </div>
          
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-gray-900">
            Authentication Error
          </h2>
          
          <p className="mt-4 text-center text-sm text-gray-600">
            {getErrorMessage(error)}
          </p>
          
          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-xs text-red-600 font-mono">
                Error code: {error}
              </p>
            </div>
          )}
        </div>
        
        <div className="space-y-4">
          <Link href="/auth/signin">
            <Button className="w-full">
              Try Again
            </Button>
          </Link>
          
          <Link href="/">
            <Button variant="outline" className="w-full">
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-500">
            If this problem persists, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function AuthErrorPage(props: Props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthErrorContent {...props} />
    </Suspense>
  )
}