# 🚀 DEPLOYMENT GUIDE - SharePay en Vercel

## 📋 Pre-requisitos Verificados
- ✅ Cuenta GitHub activa
- ✅ Cuenta Vercel activa  
- ✅ Proyecto SharePay funcionando localmente
- ✅ Base de datos Neon PostgreSQL conectada

## 🔧 PASO 1: Preparación Final del Proyecto

### 1.1 Generar secreto seguro para producción
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
**Guarda este valor** - lo necesitarás para NEXTAUTH_SECRET

### 1.2 Verificar archivos críticos
- ✅ `.env.example` - Plantilla de variables
- ✅ `vercel.json` - Configuración de Vercel
- ✅ `package.json` - Dependencias correctas
- ✅ `.gitignore` - Archivos excluidos

## 📁 PASO 2: Subir a GitHub

### 2.1 Inicializar Git (si no está inicializado)
```bash
cd "C:\Users\User\Documents\ProyectosClaude\SharePay"
git init
git add .
git commit -m "🚀 Initial commit - SharePay Phase 0 ready for deployment"
```

### 2.2 Crear repositorio en GitHub
1. Ve a [github.com](https://github.com)
2. Click en "New repository" (botón verde)
3. Nombre: `sharepay`
4. Descripción: `Collaborative Payment Platform - Share digital resources through micropayments`
5. Configuración:
   - ✅ Public (recomendado) o Private
   - ❌ NO marcar "Add a README file"
   - ❌ NO marcar ".gitignore"
   - ❌ NO marcar "license"
6. Click "Create repository"

### 2.3 Conectar y subir código
Copia los comandos que GitHub te muestre (similar a estos):
```bash
git remote add origin https://github.com/TU-USUARIO/sharepay.git
git branch -M main
git push -u origin main
```

## 🌐 PASO 3: Deployment en Vercel

### 3.1 Conectar GitHub con Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Click "New Project"
3. Conectar con GitHub (si no está conectado)
4. Buscar tu repositorio `sharepay`
5. Click "Import"

### 3.2 Configuración del Proyecto
- **Framework Preset**: Next.js (detectado automáticamente)
- **Root Directory**: `./` (por defecto)
- **Build Command**: `npm run build` (detectado automáticamente)
- **Output Directory**: `.next` (detectado automáticamente)
- **Install Command**: `npm install` (detectado automáticamente)

### 3.3 Variables de Entorno (CRÍTICO)
En la sección "Environment Variables", añadir:

```bash
# REQUERIDAS PARA FUNCIONAR
DATABASE_URL
postgresql://neondb_owner:npg_WkixIo97FKmg@ep-square-brook-a27fdxat-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require

NEXTAUTH_URL
https://TU-APP-NAME.vercel.app

NEXTAUTH_SECRET
EL-SECRETO-QUE-GENERASTE-EN-PASO-1.1
```

### 3.4 Deploy
1. Click "Deploy"
2. Esperar 2-3 minutos
3. ✅ ¡Listo!

## 🎯 PASO 4: Verificación del Deployment

### 4.1 Verificar URL de la aplicación
- URL será: `https://sharepay-[random].vercel.app`
- O tu dominio personalizado si lo configuraste

### 4.2 Verificar funcionalidades
1. **Homepage**: ✅ Debe cargar correctamente
2. **Database Status**: ✅ Debe mostrar "Connected" en verde
3. **About page**: ✅ Debe funcionar la navegación
4. **Responsive**: ✅ Debe verse bien en móvil

### 4.3 Verificar logs en Vercel
1. Ve al dashboard de Vercel
2. Click en tu proyecto
3. Ir a "Functions" > "View Function Logs"
4. Verificar que no hay errores

## 🔧 PASO 5: Configuración Post-Deployment

### 5.1 Actualizar URL en base de datos
Si necesitas actualizar la URL base:
```bash
# Localmente, actualizar .env.local
NEXTAUTH_URL="https://tu-app.vercel.app"
```

### 5.2 Configurar dominio personalizado (opcional)
1. En Vercel dashboard > Settings > Domains
2. Añadir tu dominio custom
3. Configurar DNS según instrucciones

## 🚨 Troubleshooting Común

### Error: "Internal Server Error"
- ✅ Verificar variables de entorno en Vercel
- ✅ Verificar conexión a base de datos
- ✅ Revisar Function Logs en Vercel

### Error: "Database connection failed"
- ✅ Verificar DATABASE_URL en variables de entorno
- ✅ Verificar que Neon DB permite conexiones externas
- ✅ Verificar formato de connection string

### Error: "Build failed"
- ✅ Verificar que `npm run build` funciona localmente
- ✅ Verificar dependencias en package.json
- ✅ Revisar Build Logs en Vercel

## 🎉 ¡Deployment Exitoso!

Una vez completado, tendrás:
- ✅ SharePay funcionando en producción
- ✅ URL pública accesible
- ✅ Base de datos Neon conectada
- ✅ Configuración lista para Fase 1

**🔗 URL de tu aplicación**: `https://sharepay-[random].vercel.app`

---

**Próximo paso**: Proceder con **Fase 1** - Sistema de autenticación 🚀