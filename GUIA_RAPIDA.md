# 🚀 Jupach Wiki - Guía de Inicio Rápido

## ✅ Configuración Actualizada

El sistema ahora usa el **servidor de desarrollo de Laravel** en el puerto **8000** en lugar de Apache.

---

## 🌐 URL de Acceso

### ✅ URL Correcta:
```
http://localhost:8000
```

### ❌ NO usar:
```
http://localhost  (puerto 80 - Apache deshabilitado)
```

---

## 🚀 Iniciar la Aplicación

### Opción 1: Acceso Directo (Recomendado)
1. **Doble clic** en "Iniciar Jupach Wiki" del escritorio
2. Espera 5-10 segundos
3. Presiona cualquier tecla para abrir el navegador
4. O navega manualmente a: `http://localhost:8000`

### Opción 2: Archivo BAT
1. Doble clic en `start-wiki.bat` en la carpeta del proyecto
2. Espera a que inicie
3. Abre `http://localhost:8000`

### Opción 3: PowerShell
```powershell
cd C:\Users\denav\Downloads\Jupach\wiki
.\start-wiki-quick.ps1
```

### Opción 4: Comando NPM
```powershell
cd C:\Users\denav\Downloads\Jupach\wiki
npm run dev:iniciar
```

---

## 🔧 Servicios Activos

| Servicio | Puerto | Estado | Inicio |
|----------|--------|--------|--------|
| PostgreSQL | 5432 | Running | Automático |
| Laravel Server | 8000 | Manual | Script |
| Vite Dev Server | 5173/5174 | Manual | Script |
| Apache | 80 | Detenido | Manual |

---

## 🔄 Al Reiniciar el PC

1. **Windows inicia** → PostgreSQL arranca automáticamente
2. **Inicias sesión** → Tarea programada ejecuta `start-wiki-quick.ps1`
3. **Script inicia** → Laravel + Vite en ventana separada
4. **Sistema listo** → Accede a `http://localhost:8000`

---

## 📁 Archivos del Sistema

```
C:\Users\denav\Downloads\Jupach\wiki\
├── start-wiki-quick.ps1    ← Script principal (abre ventana separada)
├── start-wiki.ps1           ← Script alternativo (ventana actual)
├── start-wiki.bat           ← Acceso rápido
└── package.json             ← Script "dev:iniciar"
```

---

## 🖥️ Ventana del Servidor

Cuando inicies la aplicación, se abrirá una **ventana de PowerShell separada** con:
- Servidor Laravel corriendo en puerto 8000
- Servidor Vite corriendo en puerto 5173/5174
- Logs en tiempo real

**No cierres esta ventana mientras uses la aplicación.**

---

## 🛑 Detener la Aplicación

Para detener los servidores:
1. Ve a la ventana de PowerShell del servidor
2. Presiona `Ctrl+C`
3. Confirma con `S` (Sí)

---

## ⚙️ Comandos Útiles

### Ver si el servidor está corriendo
```powershell
Get-NetTCPConnection -LocalPort 8000 -State Listen -ErrorAction SilentlyContinue
```

### Matar proceso en puerto 8000 (si es necesario)
```powershell
$process = Get-NetTCPConnection -LocalPort 8000 -ErrorAction SilentlyContinue
if ($process) {
    Stop-Process -Id $process.OwningProcess -Force
}
```

### Ver estado de PostgreSQL
```powershell
Get-Service postgresql-x64-17
```

### Limpiar cache de Laravel
```powershell
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear
```

---

## 🔍 Solución de Problemas

### ❌ El puerto 8000 ya está en uso

**Solución:**
```powershell
# Encontrar qué proceso usa el puerto
Get-NetTCPConnection -LocalPort 8000 | Select-Object -ExpandProperty OwningProcess

# Detener el proceso (reemplaza <PID> con el número)
Stop-Process -Id <PID> -Force
```

### ❌ El servidor no inicia

**Solución:**
```powershell
# Verificar PostgreSQL
Get-Service postgresql-x64-17

# Si está detenido, iniciarlo
Start-Service postgresql-x64-17

# Reintentar
.\start-wiki-quick.ps1
```

### ❌ Error de conexión a base de datos

**Solución:**
```powershell
# Verificar conexión
php artisan db:show

# Si falla, reiniciar PostgreSQL
Restart-Service postgresql-x64-17
```

### ❌ Vite no compila correctamente

**Solución:**
```powershell
# Limpiar node_modules y reinstalar
Remove-Item -Recurse -Force node_modules
npm install

# Reiniciar servidor
.\start-wiki-quick.ps1
```

---

## 📊 Diferencias con la Configuración Anterior

| Aspecto | Antes | Ahora |
|---------|-------|-------|
| Servidor Web | Apache (puerto 80) | Laravel Dev (puerto 8000) |
| URL | http://localhost | http://localhost:8000 |
| Apache | Automático | Manual (deshabilitado) |
| Vite | Separado | Integrado con Laravel |
| Ventana | Misma ventana | Ventana separada |

---

## 🎯 Ventajas de la Nueva Configuración

✅ **Hot Module Replacement (HMR)** - Cambios en vivo sin recargar
✅ **Vite integrado** - Desarrollo más rápido
✅ **Sin conflictos de puerto** - No usa el puerto 80
✅ **Logs visibles** - Ver errores en tiempo real
✅ **Más estable** - Menos servicios complejos
✅ **Desarrollo nativo** - Ambiente Laravel estándar

---

## 📝 Resumen Rápido

```bash
# Iniciar aplicación
.\start-wiki.bat

# URL de acceso
http://localhost:8000

# Detener aplicación
Ctrl+C en la ventana del servidor
```

---

## ✨ Estado Actual del Sistema

```
✅ PostgreSQL          → Automático (puerto 5432)
✅ Laravel Dev Server  → Manual via script (puerto 8000)
✅ Vite Dev Server     → Manual via script (puerto 5173/5174)
✅ Tarea Programada    → Configurada
✅ Accesos Directos    → Actualizados
❌ Apache              → Deshabilitado (no necesario)
```

---

**¡Sistema listo para desarrollo!** 🎉

Accede a: **http://localhost:8000**
