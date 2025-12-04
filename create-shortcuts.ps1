# Script para crear accesos directos en el escritorio

$desktopPath = [Environment]::GetFolderPath("Desktop")
$wikiPath = "C:\Users\denav\Downloads\Jupach\wiki"

Write-Host "Creando accesos directos en el escritorio..." -ForegroundColor Cyan
Write-Host ""

# Crear acceso directo al script de inicio
$WScriptShell = New-Object -ComObject WScript.Shell
$shortcut1 = $WScriptShell.CreateShortcut("$desktopPath\Iniciar Jupach Wiki.lnk")
$shortcut1.TargetPath = "powershell.exe"
$shortcut1.Arguments = "-NoProfile -ExecutionPolicy Bypass -File `"$wikiPath\start-wiki.ps1`""
$shortcut1.WorkingDirectory = $wikiPath
$shortcut1.IconLocation = "C:\xampp\apache\bin\httpd.exe,0"
$shortcut1.Description = "Iniciar servicios de Jupach Wiki"
$shortcut1.Save()
Write-Host "✓ Creado: Iniciar Jupach Wiki.lnk" -ForegroundColor Green

# Crear acceso directo a la aplicación web
$shortcut2 = $WScriptShell.CreateShortcut("$desktopPath\Abrir Jupach Wiki.lnk")
$shortcut2.TargetPath = "http://localhost"
$shortcut2.IconLocation = "C:\Program Files\Internet Explorer\iexplore.exe,0"
$shortcut2.Description = "Abrir Jupach Wiki en el navegador"
$shortcut2.Save()
Write-Host "✓ Creado: Abrir Jupach Wiki.lnk" -ForegroundColor Green

# Crear acceso directo a la carpeta del proyecto
$shortcut3 = $WScriptShell.CreateShortcut("$desktopPath\Carpeta Jupach Wiki.lnk")
$shortcut3.TargetPath = $wikiPath
$shortcut3.IconLocation = "C:\Windows\System32\imageres.dll,3"
$shortcut3.Description = "Abrir carpeta del proyecto Jupach Wiki"
$shortcut3.Save()
Write-Host "✓ Creado: Carpeta Jupach Wiki.lnk" -ForegroundColor Green

Write-Host ""
Write-Host "Accesos directos creados exitosamente en el escritorio!" -ForegroundColor Green
Write-Host ""
