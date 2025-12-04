@echo off
REM Script de inicio rápido para Jupach Wiki
REM Este script puede ejecutarse con doble clic

echo ====================================
echo   Iniciando Jupach Wiki System
echo ====================================
echo.

REM Cambiar al directorio del script
cd /d "%~dp0"

REM Ejecutar el script PowerShell optimizado
PowerShell -NoProfile -ExecutionPolicy Bypass -File "%~dp0start-wiki-quick.ps1"
