// C:\Users\User\Documents\ProyectosClaude\SharePay\middleware.ts

import { auth } from "@/lib/auth/config"
import { NextResponse } from "next/server"

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  // Rutas protegidas que requieren autenticación
  const protectedRoutes = ['/dashboard']
  
  // Rutas de autenticación
  const authRoutes = ['/auth/signin', '/auth/error']
  
  // Si está en una ruta protegida y no está logueado
  if (protectedRoutes.some(route => nextUrl.pathname.startsWith(route)) && !isLoggedIn) {
    return NextResponse.redirect(new URL('/auth/signin', nextUrl))
  }
  
  // Si está logueado y trata de acceder a rutas de auth, redirigir al dashboard
  if (authRoutes.includes(nextUrl.pathname) && isLoggedIn) {
    return NextResponse.redirect(new URL('/dashboard', nextUrl))
  }

  return NextResponse.next()
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}