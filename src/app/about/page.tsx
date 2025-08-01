// C:\Users\User\Documents\ProyectosClaude\SharePay\src\app\about\page.tsx

import { Button } from '@/components/ui/button'
import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Navigation */}
      <div className="flex items-center gap-4">
        <Link href="/">
          <Button variant="ghost" size="sm">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
        <div className="w-px h-6 bg-border"></div>
        <h1 className="text-2xl font-bold">About SharePay</h1>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        <section className="prose prose-gray max-w-none">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            SharePay revolutionizes how digital content is shared and monetized through collaborative payments. 
            Our platform enables creators to upload digital resources and set a total price, while allowing 
            multiple users to contribute towards that cost. The content is only unlocked when the full amount 
            is paid and the content has been verified for legitimacy.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-semibold">Upload Content</h3>
                </div>
                <p className="text-muted-foreground">
                  Creators upload a download link to their digital resource and set a total price for access.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-semibold">Content Verification</h3>
                </div>
                <p className="text-muted-foreground">
                  Our verification system (human and AI) ensures the content is legitimate and safe.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-semibold">Collaborative Payment</h3>
                </div>
                <p className="text-muted-foreground">
                  Multiple users can contribute any amount towards the total cost through secure Stripe payments.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <h3 className="text-xl font-semibold">Automatic Unlock</h3>
                </div>
                <p className="text-muted-foreground">
                  Once the full amount is paid, the download link is automatically unlocked for all contributors.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-card border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Frontend</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Next.js 15 (App Router)</li>
                <li>• React Server Components</li>
                <li>• TailwindCSS + ShadCN/ui</li>
                <li>• TypeScript</li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Backend</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Next.js Server Actions</li>
                <li>• Prisma ORM</li>
                <li>• Neon PostgreSQL</li>
                <li>• Auth.js Authentication</li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Services</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Stripe Payments</li>
                <li>• Vercel Deployment</li>
                <li>• GitHub & Google OAuth</li>
                <li>• Content Verification API</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-card border rounded-lg p-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Current Status</h2>
            <p className="text-lg text-muted-foreground">
              SharePay is currently in <strong>Phase 0</strong> of development. 
              We have successfully established the minimal architecture and database connection.
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <Link href="/">
                <Button size="lg">
                  View System Status
                </Button>
              </Link>
              <Button variant="outline" size="lg" disabled>
                Join Beta (Coming Soon)
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}