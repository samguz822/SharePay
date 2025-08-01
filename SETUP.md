# 🚀 INSTRUCCIONES DE INSTALACIÓN - SharePay

## ⚡ Pasos para ejecutar el proyecto

### 1. Abrir Terminal en la carpeta del proyecto
```bash
cd "C:\Users\User\Documents\ProyectosClaude\SharePay"
```

### 2. Limpiar e instalar dependencias seguras
```bash
# Limpiar instalación anterior (si existe)
rm -rf node_modules package-lock.json
# En Windows: rmdir /s node_modules && del package-lock.json

# Instalar dependencias actualizadas y seguras
npm install

# Verificar que no hay vulnerabilidades
npm audit
```

### 3. Configurar la base de datos
```bash
# Generar el cliente de Prisma
npm run db:generate

# Sincronizar el esquema con la base de datos
npm run db:push
```

### 4. Ejecutar en modo desarrollo
```bash
npm run dev
```

### 5. Abrir en el navegador
- Navegar a: http://localhost:3000
- La página principal mostrará el estado del sistema
- Ir a http://localhost:3000/about para ver información del proyecto

## 🔧 Comandos útiles

### Base de datos
- `npm run db:studio` - Abrir Prisma Studio (interfaz visual de BD)
- `npm run db:migrate` - Crear nuevas migraciones
- `npm run db:push` - Sincronizar esquema sin migraciones

### Desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Ejecutar versión de producción
- `npm run lint` - Ejecutar linter

## ✅ Verificación de instalación

Si todo está correcto, deberías ver:
1. **Homepage**: Información del proyecto y estado de sistemas
2. **Database Status**: Indicador verde "Connected" 
3. **About Page**: Documentación completa del proyecto
4. **Responsive Design**: Funciona en móvil y desktop

## 🚨 Solución de problemas

### Error de base de datos
Si aparece error de conexión a BD:
1. Verificar que la variable `DATABASE_URL` en `.env.local` esté correcta
2. Ejecutar `npm run db:push` nuevamente

### Error de dependencias
Si hay errores de instalación:
1. Borrar `node_modules` y `package-lock.json`
2. Ejecutar `npm install` nuevamente

### Error de TypeScript
Si hay errores de tipos:
1. Ejecutar `npm run db:generate`
2. Reiniciar el servidor de desarrollo

## 🎯 Próximos pasos

Una vez que el proyecto funcione correctamente:
1. ✅ **Phase 0** está completa
2. 🔄 Proceder con **Phase 1**: Sistema de autenticación
3. 📝 Cada fase se construye sobre la anterior

---

**¡El proyecto SharePay Phase 0 está listo para usar!** 🎉