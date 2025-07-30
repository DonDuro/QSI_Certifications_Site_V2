@echo off
title QSI Certifications - NPM Start
echo.
echo ========================================
echo   QSI Certifications - NPM Method
echo ========================================
echo.

REM Install dependencies
if not exist "node_modules" (
    echo 📦 Instalando dependencias...
    npm install
)

REM Copy config
echo 🔧 Configurando...
copy vite.config.deployment.ts vite.config.ts >nul 2>&1

echo 🚀 Iniciando con npm scripts...
echo.
echo   Compilando frontend...
npm run build:client

if %errorlevel% equ 0 (
    echo   ✅ Build exitoso
    echo   🌐 Iniciando servidor en http://localhost:5000
    echo.
    npm start
) else (
    echo   ❌ Error en build, intentando modo desarrollo...
    set NODE_ENV=development
    set PORT=3000
    npm run dev
)

echo.
echo 👋 Servidor detenido
pause