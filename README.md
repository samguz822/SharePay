# SharePay - Collaborative Payment Platform

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tu-usuario/sharepay)

## 🎯 Project Overview

SharePay is a modern web application built with Next.js 15 that allows users to share digital resources through collaborative micropayments. The platform ensures content legitimacy through verification systems and unlocks download links only when full payment is received.

## 🛠️ Technology Stack

- **Frontend**: Next.js 15, React Server Components, TailwindCSS, ShadCN/ui
- **Backend**: Next.js Server Actions, Prisma ORM
- **Database**: Neon PostgreSQL (Serverless)
- **Authentication**: Auth.js (GitHub & Google OAuth) - *Coming in Phase 1*
- **Payments**: Stripe - *Coming in Phase 3*
- **Deployment**: Vercel

## 🚀 Quick Deploy

### Deploy to Vercel (Recommended)

1. Click the "Deploy with Vercel" button above
2. Connect your GitHub account
3. Set the environment variables (see below)
4. Deploy!

### Manual Deployment

1. **Clone and Install**
   ```bash
   git clone <your-repo-url>
   cd sharepay
   npm install
   ```

2. **Set up Environment Variables**
   
   Copy `.env.example` to `.env.local` and configure:
   ```bash
   DATABASE_URL="your-neon-postgresql-url"
   NEXTAUTH_URL="https://your-vercel-app.vercel.app"
   NEXTAUTH_SECRET="your-production-secret"
   ```

3. **Set up Database**
   ```bash
   npm run db:generate
   npm run db:push
   ```

4. **Run Locally**
   ```bash
   npm run dev
   ```

## 📦 Environment Variables

Create these variables in your deployment platform:

```bash
# Required
DATABASE_URL="postgresql://user:pass@host:port/db?sslmode=require"
NEXTAUTH_URL="https://your-domain.vercel.app"
NEXTAUTH_SECRET="your-super-secure-secret-key"

# Phase 1 - Authentication (GitHub & Google OAuth)
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Phase 3 - Stripe Payments
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
```

## 🔧 Current Status - Phase 0

✅ **Completed:**
- Next.js 15.4.5 project setup with App Router (vulnerabilities patched)
- TailwindCSS + ShadCN/ui integration
- Neon PostgreSQL database connection
- Basic Prisma schema
- Homepage with system status
- About page with project information
- Responsive design and modern UI
- **Security updates applied** - 0 critical vulnerabilities
- **Vercel deployment ready**

## 📋 Development Phases

- ✅ **Phase 0** - Minimal Architecture + Database Connection
- ⏳ **Phase 1** - Authentication System + Database Structure
- ⏳ **Phase 2** - Product Creation Form
- ⏳ **Phase 3** - Stripe Integration + Collaborative Payments
- ⏳ **Phase 4** - Auto-unlock Logic
- ⏳ **Phase 5** - Content Verification System
- ⏳ **Phase 6** - User Dashboard + Verifier Panel
- ⏳ **Phase 7** - Security Enhancements + UX Polish

## 🛡️ Security Features

- CSRF, XSS, SSRF, and SQLi protection
- Content Security Policy
- Secure headers configuration
- JWT token rotation (planned)
- Content verification system (planned)

## 🚀 Deployment Notes

### Vercel Configuration
- ✅ `vercel.json` configured
- ✅ Build command: `npm run build`
- ✅ Output directory: `.next`
- ✅ Node.js 18.x compatible

### Database
- ✅ Neon PostgreSQL (serverless)
- ✅ Connection pooling enabled
- ✅ SSL required for security

## 🤝 Contributing

This project follows a modular phase-based development approach. Each phase must be:
- Functional and stable
- Ready for production
- Secure and well-tested
- Properly documented

## 📄 License

This project is private and proprietary.

---

**Built with ❤️ using Next.js 15 and modern web technologies**

**🔗 [Live Demo](https://your-sharepay-app.vercel.app)** | **📚 [Documentation](./SETUP.md)** | **🐛 [Issues](https://github.com/your-username/sharepay/issues)**