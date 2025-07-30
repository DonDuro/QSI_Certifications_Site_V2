@echo off
title Fix NPM Dependencies
echo.
echo ========================================
echo   Reparando dependencias de NPM
echo ========================================
echo.

echo 🧹 Limpiando node_modules y package-lock.json...
if exist "node_modules" (
    rmdir /s /q "node_modules"
    echo ✅ node_modules eliminado
)

if exist "package-lock.json" (
    del "package-lock.json"
    echo ✅ package-lock.json eliminado
)

echo.
echo 📦 Reinstalando dependencias limpias...
npm install --force

echo.
echo ✅ Reparación completada
echo Ahora prueba: .\start-simple.bat
pause