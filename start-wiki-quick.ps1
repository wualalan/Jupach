# Script de inicio optimizado para Jupach Wiki
# Inicia el servidor de desarrollo en una ventana separada

Write-Host "====================================" -ForegroundColor Cyan
Write-Host "  Iniciando Jupach Wiki System" -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan
Write-Host ""

# Cambiar al directorio del proyecto
Set-Location "C:\Users\denav\Downloads\Jupach\wiki"

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

# Verificar conexión a la base de datos
Write-Host "[2/4] Verificando conexión a la base de datos..." -ForegroundColor Yellow
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

# Limpiar cache de Laravel
Write-Host "[3/4] Limpiando cache de Laravel..." -ForegroundColor Yellow
php artisan config:clear | Out-Null
php artisan cache:clear | Out-Null
Write-Host "  -> Cache limpiado correctamente" -ForegroundColor Green

# Verificar si el servidor ya está corriendo
Write-Host "[4/4] Verificando servidores..." -ForegroundColor Yellow
$serverRunning = Get-NetTCPConnection -LocalPort 8000 -State Listen -ErrorAction SilentlyContinue
if ($serverRunning) {
    Write-Host "  -> Servidor Laravel ya está en ejecución (puerto 8000)" -ForegroundColor Green
    Write-Host ""
    Write-Host "====================================" -ForegroundColor Cyan
    Write-Host "  Sistema ya está activo" -ForegroundColor Green
    Write-Host "====================================" -ForegroundColor Cyan
} else {
    Write-Host "  -> Iniciando servidor de desarrollo..." -ForegroundColor White
    Write-Host ""
    Write-Host "====================================" -ForegroundColor Cyan
    Write-Host "  Abriendo servidor en nueva ventana" -ForegroundColor Green
    Write-Host "====================================" -ForegroundColor Cyan
    
    # Iniciar el servidor en una nueva ventana de PowerShell
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd 'C:\Users\denav\Downloads\Jupach\wiki'; Write-Host 'Servidor Jupach Wiki' -ForegroundColor Cyan; Write-Host 'Presiona Ctrl+C para detener' -ForegroundColor Yellow; Write-Host ''; npm run dev:iniciar"
    
    Start-Sleep -Seconds 3
}

Write-Host ""
Write-Host "Servicios activos:" -ForegroundColor White
Write-Host "  - PostgreSQL: " -NoNewline; Write-Host "Running on port 5432" -ForegroundColor Green
Write-Host "  - Laravel Server: " -NoNewline; Write-Host "Running on port 8000" -ForegroundColor Green
Write-Host "  - Vite Dev Server: " -NoNewline; Write-Host "Running on port 5173/5174" -ForegroundColor Green
Write-Host ""
Write-Host "Para acceder a la aplicación:" -ForegroundColor White
Write-Host "  " -NoNewline; Write-Host "http://localhost:8000" -ForegroundColor Cyan -BackgroundColor DarkBlue
Write-Host ""
Write-Host "Presiona cualquier tecla para abrir en el navegador..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
Start-Process "http://localhost:8000"
