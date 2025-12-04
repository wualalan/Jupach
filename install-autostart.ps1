# Script para crear tarea programada de inicio automático
# Ejecutar como Administrador

$taskName = "Jupach Wiki - Auto Start"
$scriptPath = "C:\Users\denav\Downloads\Jupach\wiki\start-wiki-quick.ps1"

Write-Host "Configurando tarea programada de inicio automático..." -ForegroundColor Cyan

# Eliminar tarea existente si ya existe
$existingTask = Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue
if ($existingTask) {
    Write-Host "Eliminando tarea existente..." -ForegroundColor Yellow
    Unregister-ScheduledTask -TaskName $taskName -Confirm:$false
}

# Crear acción para ejecutar el script PowerShell
$action = New-ScheduledTaskAction -Execute "PowerShell.exe" `
    -Argument "-NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File `"$scriptPath`""

# Crear trigger para ejecutar al inicio del sistema (después del login)
$trigger = New-ScheduledTaskTrigger -AtLogOn

# Configurar settings adicionales
$settings = New-ScheduledTaskSettingsSet `
    -AllowStartIfOnBatteries `
    -DontStopIfGoingOnBatteries `
    -StartWhenAvailable `
    -RunOnlyIfNetworkAvailable

# Obtener el usuario actual
$principal = New-ScheduledTaskPrincipal -UserId $env:USERNAME -RunLevel Highest

# Registrar la tarea programada
try {
    Register-ScheduledTask -TaskName $taskName `
        -Action $action `
        -Trigger $trigger `
        -Settings $settings `
        -Principal $principal `
        -Description "Inicia automáticamente los servicios de Jupach Wiki al iniciar sesión" `
        -Force | Out-Null

    Write-Host "Tarea programada creada exitosamente!" -ForegroundColor Green
    Write-Host ""
    Write-Host "La tarea '$taskName' se ejecutará automáticamente al iniciar sesión." -ForegroundColor White
    Write-Host "Los servicios de PostgreSQL y Apache se iniciarán automáticamente." -ForegroundColor White
} catch {
    Write-Host "Error al crear la tarea programada: $_" -ForegroundColor Red
    Write-Host ""
    Write-Host "Asegúrate de ejecutar este script como Administrador." -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "Para ver la tarea programada:" -ForegroundColor Cyan
Write-Host "  1. Abre el Programador de Tareas (Task Scheduler)" -ForegroundColor White
Write-Host "  2. Busca '$taskName'" -ForegroundColor White
Write-Host ""
Write-Host "Para deshabilitar el inicio automático:" -ForegroundColor Cyan
Write-Host "  Get-ScheduledTask -TaskName '$taskName' | Disable-ScheduledTask" -ForegroundColor White
Write-Host ""
Write-Host "Para habilitar el inicio automático:" -ForegroundColor Cyan
Write-Host "  Get-ScheduledTask -TaskName '$taskName' | Enable-ScheduledTask" -ForegroundColor White
Write-Host ""
