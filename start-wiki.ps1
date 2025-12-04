# Script de inicio automático para Jupach Wiki
# Este script verifica y inicia todos los servicios necesarios

Write-Host "====================================" -ForegroundColor Cyan
Write-Host "  Iniciando Jupach Wiki System" -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan
Write-Host ""

# Verificar y iniciar PostgreSQL
Write-Host "[1/4] Verificando PostgreSQL..." -ForegroundColor Yellow
$postgresService = Get-Service -Name "postgresql-x64-17" -ErrorAction SilentlyContinue
if ($postgresService) {
    if ($postgresService.Status -ne "Running") {
        Write-Host "  -> Iniciando PostgreSQL..." -ForegroundColor White
        Start-Service -Name "postgresql-x64-17"
        Start-Sleep -Seconds 3
        Write-Host "  -> PostgreSQL iniciado correctamente" -ForegroundColor Green
    } else {
        Write-Host "  -> PostgreSQL ya está en ejecución" -ForegroundColor Green
    }
} else {
    Write-Host "  -> ERROR: Servicio PostgreSQL no encontrado" -ForegroundColor Red
    exit 1
}

# Detener Apache si está corriendo (no lo necesitamos)
Write-Host "[2/5] Verificando Apache..." -ForegroundColor Yellow
$apacheService = Get-Service -Name "Apache2.4" -ErrorAction SilentlyContinue
if ($apacheService -and $apacheService.Status -eq "Running") {
    Write-Host "  -> Deteniendo Apache (no necesario)..." -ForegroundColor White
    Stop-Service -Name "Apache2.4" -Force -ErrorAction SilentlyContinue
    Write-Host "  -> Apache detenido" -ForegroundColor Green
} else {
    Write-Host "  -> Apache no está en ejecución (correcto)" -ForegroundColor Green
}

# Verificar conexión a la base de datos
Write-Host "[3/5] Verificando conexión a la base de datos..." -ForegroundColor Yellow
$currentDir = Get-Location
Set-Location "C:\Users\denav\Downloads\Jupach\wiki"

try {
    $dbTest = php artisan tinker --execute="echo DB::connection()->getDatabaseName();" 2>&1
    if ($dbTest -like "*Jupach*") {
        Write-Host "  -> Conexión a base de datos OK" -ForegroundColor Green
    } else {
        Write-Host "  -> Advertencia: No se pudo verificar la conexión" -ForegroundColor Yellow
    }
} catch {
    Write-Host "  -> Advertencia: No se pudo verificar la conexión" -ForegroundColor Yellow
}

Set-Location $currentDir

# Limpiar cache de Laravel
Write-Host "[4/5] Limpiando cache de Laravel..." -ForegroundColor Yellow
Set-Location "C:\Users\denav\Downloads\Jupach\wiki"
php artisan config:clear | Out-Null
php artisan cache:clear | Out-Null
Write-Host "  -> Cache limpiado correctamente" -ForegroundColor Green

# Iniciar servidor de desarrollo Laravel + Vite
Write-Host "[5/5] Iniciando servidor de desarrollo..." -ForegroundColor Yellow
Write-Host "  -> Iniciando Laravel (puerto 8000) y Vite..." -ForegroundColor White
Write-Host ""
Write-Host "====================================" -ForegroundColor Cyan
Write-Host "  Iniciando aplicación web..." -ForegroundColor Green
Write-Host "====================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Servicios activos:" -ForegroundColor White
Write-Host "  - PostgreSQL: " -NoNewline; Write-Host "Running on port 5432" -ForegroundColor Green
Write-Host "  - Laravel Server: " -NoNewline; Write-Host "Starting on port 8000" -ForegroundColor Yellow
Write-Host "  - Vite Dev Server: " -NoNewline; Write-Host "Starting on port 5173/5174" -ForegroundColor Yellow
Write-Host ""
Write-Host "Para acceder a la aplicación:" -ForegroundColor White
Write-Host "  " -NoNewline; Write-Host "http://localhost:8000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Presiona Ctrl+C para detener los servidores" -ForegroundColor Yellow
Write-Host ""

# Cambiar al directorio del proyecto y ejecutar npm run dev:iniciar
npm run dev:iniciar
