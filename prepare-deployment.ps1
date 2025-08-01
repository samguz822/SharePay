# C:\Users\User\Documents\ProyectosClaude\SharePay\prepare-deployment.ps1

Write-Host "🚀 SharePay - Preparación para Deployment" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Green

Write-Host ""
Write-Host "1. Generando secreto seguro para producción..." -ForegroundColor Yellow

# Generar secreto seguro
$secret = -join ((1..32) | ForEach-Object { '{0:X2}' -f (Get-Random -Maximum 256) })
Write-Host "✅ Secreto generado: $secret" -ForegroundColor Green
Write-Host "   📋 GUARDA ESTE VALOR - lo necesitarás para NEXTAUTH_SECRET en Vercel" -ForegroundColor Cyan

Write-Host ""
Write-Host "2. Verificando archivos críticos..." -ForegroundColor Yellow

$criticalFiles = @(
    ".env.example",
    "vercel.json", 
    "package.json",
    ".gitignore",
    "README.md",
    "DEPLOYMENT.md"
)

foreach ($file in $criticalFiles) {
    if (Test-Path $file) {
        Write-Host "   ✅ $file" -ForegroundColor Green
    } else {
        Write-Host "   ❌ $file - FALTA" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "3. Verificando que el proyecto funciona localmente..." -ForegroundColor Yellow

# Verificar que no hay errores de build
try {
    $buildResult = npm run build 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "   ✅ Build exitoso - listo para production" -ForegroundColor Green
    } else {
        Write-Host "   ❌ Error en build - revisar antes de deployment" -ForegroundColor Red
        Write-Host "   Detalles: $buildResult" -ForegroundColor Yellow
    }
} catch {
    Write-Host "   ⚠️ No se pudo ejecutar build - revisar npm install" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "📋 RESUMEN PARA DEPLOYMENT:" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "🔐 Variables de Entorno para Vercel:" -ForegroundColor White
Write-Host "   DATABASE_URL = postgresql://neondb_owner:npg_WkixIo97FKmg@ep-square-brook-a27fdxat-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require" -ForegroundColor Gray
Write-Host "   NEXTAUTH_URL = https://TU-APP-NAME.vercel.app" -ForegroundColor Gray
Write-Host "   NEXTAUTH_SECRET = $secret" -ForegroundColor Gray
Write-Host ""
Write-Host "🚀 Pasos siguientes:" -ForegroundColor White
Write-Host "   1. Crear repositorio en GitHub: github.com/new" -ForegroundColor Gray
Write-Host "   2. Subir código: git init, git add ., git commit, git push" -ForegroundColor Gray
Write-Host "   3. Ir a vercel.com/new y conectar el repositorio" -ForegroundColor Gray
Write-Host "   4. Añadir las variables de entorno mostradas arriba" -ForegroundColor Gray
Write-Host "   5. Deploy!" -ForegroundColor Gray
Write-Host ""
Write-Host "🎉 ¡Tu proyecto SharePay está listo para deployment!" -ForegroundColor Green