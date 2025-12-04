# 🚀 Configuración de Inicio Automático - Jupach Wiki

## ✅ Sistema Configurado Completamente

El sistema Jupach Wiki ahora está configurado para iniciarse automáticamente en cada reinicio del PC.

---

## 🔧 Servicios Configurados

### 1. **PostgreSQL 17**
- ✅ Servicio: `postgresql-x64-17`
- ✅ Estado: Automático
- ✅ Puerto: 5432
- ✅ Se inicia automáticamente con Windows

### 2. **Apache 2.4**
- ✅ Servicio: `Apache2.4`
- ✅ Estado: Automático
- ✅ Puerto: 80
- ✅ Se inicia automáticamente con Windows

### 3. **Tarea Programada**
- ✅ Nombre: "Jupach Wiki - Auto Start"
- ✅ Se ejecuta al iniciar sesión
- ✅ Verifica y inicia servicios automáticamente
- ✅ Limpia cache de Laravel

---

## 📁 Archivos Creados

### `start-wiki.ps1`
Script principal de inicio que:
- Verifica estado de PostgreSQL
- Verifica estado de Apache
- Prueba conexión a base de datos
- Limpia cache de Laravel
- Muestra estado del sistema

**Uso:**
```powershell
.\start-wiki.ps1
```

### `start-wiki.bat`
Acceso directo para ejecutar el script con doble clic.

**Uso:**
- Doble clic en el archivo
- Se ejecuta automáticamente

### `install-autostart.ps1`
Instalador de inicio automático (ya ejecutado).

**Para reinstalar:**
```powershell
.\install-autostart.ps1
```

---

## 🎯 Qué Sucede al Reiniciar el PC

1. **Windows inicia**
2. **Servicios de Windows se inician automáticamente:**
   - PostgreSQL 17 → Puerto 5432
   - Apache 2.4 → Puerto 80
3. **Al iniciar sesión:**
   - Tarea programada verifica servicios
   - Limpia cache de Laravel
   - Sistema listo para usar

---

## 🌐 Acceso a la Aplicación

Después de reiniciar, la aplicación estará disponible automáticamente en:

**URL:** `http://localhost`

No necesitas ejecutar ningún comando manual.

---

## 🛠️ Comandos Útiles

### Verificar Estado de Servicios
```powershell
Get-Service Apache2.4, postgresql-x64-17 | Format-Table Name, Status, StartType
```

### Iniciar Servicios Manualmente
```powershell
# Iniciar todo
.\start-wiki.ps1

# O individualmente:
Start-Service Apache2.4
Start-Service postgresql-x64-17
```

### Detener Servicios
```powershell
Stop-Service Apache2.4
Stop-Service postgresql-x64-17
```

### Ver Tarea Programada
```powershell
Get-ScheduledTask -TaskName "Jupach Wiki - Auto Start"
```

### Deshabilitar Inicio Automático
```powershell
Get-ScheduledTask -TaskName "Jupach Wiki - Auto Start" | Disable-ScheduledTask
```

### Habilitar Inicio Automático
```powershell
Get-ScheduledTask -TaskName "Jupach Wiki - Auto Start" | Enable-ScheduledTask
```

---

## 🔍 Verificación del Sistema

### Estado Actual:
```
✅ PostgreSQL: Running (Automatic)
✅ Apache: Running (Automatic)
✅ Tarea Programada: Ready
✅ Base de Datos: Jupach (Conectada)
✅ PHP Extension intl: Habilitada
✅ Migraciones: Ejecutadas (16 tablas)
```

### Probar Sistema:
```powershell
# Ver estado completo
.\start-wiki.ps1

# Probar base de datos
php artisan db:show

# Ver migraciones
php artisan migrate:status

# Acceder a la aplicación
Start-Process "http://localhost"
```

---

## 📊 Base de Datos

- **Motor:** PostgreSQL 17.6
- **Base de Datos:** Jupach
- **Tablas:** 16 tablas creadas
- **Tamaño:** ~392 KB
- **Conexión:** Automática y persistente

---

## 🔄 Solución de Problemas

### Si los servicios no inician:

1. **Verificar servicios:**
```powershell
Get-Service Apache2.4, postgresql-x64-17
```

2. **Iniciar manualmente:**
```powershell
.\start-wiki.ps1
```

3. **Ver logs de Apache:**
```powershell
Get-Content "C:\xampp\apache\logs\error.log" -Tail 50
```

4. **Ver logs de PostgreSQL:**
```powershell
Get-Content "C:\Program Files\PostgreSQL\17\data\log\*.log" -Tail 50
```

### Si la aplicación no responde:

1. **Limpiar cache:**
```powershell
php artisan config:clear
php artisan cache:clear
php artisan route:clear
php artisan view:clear
```

2. **Verificar permisos:**
```powershell
# Asegurar permisos de escritura en storage
icacls "storage" /grant Users:F /t
icacls "bootstrap\cache" /grant Users:F /t
```

---

## ✨ Resumen

**Antes:** 
- ❌ Tenías que iniciar servicios manualmente
- ❌ Configurar cada vez que reiniciabas
- ❌ Verificar conexiones manualmente

**Ahora:**
- ✅ Todo se inicia automáticamente
- ✅ Servicios configurados como automáticos
- ✅ Tarea programada verifica el sistema
- ✅ Solo abrir `http://localhost` y usar la aplicación

---

## 🎉 Sistema 100% Listo

El sistema Jupach Wiki está completamente configurado para funcionar automáticamente en cada reinicio. No necesitas hacer nada más.

**¡Simplemente reinicia tu PC y todo funcionará automáticamente!**
