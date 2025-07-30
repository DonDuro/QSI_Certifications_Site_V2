@echo off
title QSI Certifications Development Server
echo.
echo ========================================
echo   QSI Certifications Development Server
echo ========================================
echo.

REM Check for Node.js
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js no encontrado
    echo Por favor instala Node.js desde: https://nodejs.org
    pause
    exit /b 1
)

echo ✅ Node.js detectado
echo.

REM Install dependencies if needed
if not exist "node_modules" (
    echo 📦 Instalando dependencias...
    npm install
    if %errorlevel% neq 0 (
        echo ❌ Error instalando dependencias
        pause
        exit /b 1
    )
    echo ✅ Dependencias instaladas
    echo.
)

REM Copy the working config
echo 🔧 Configurando Vite...
copy vite.config.deployment.ts vite.config.ts >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Error copiando configuración
    pause
    exit /b 1
)
echo ✅ Configuración lista
echo.

echo 🚀 Iniciando servidor de desarrollo...
echo.
echo   🌐 URL: http://localhost:3000
echo   ⚡ Powered by Vite
echo   📱 Frontend React + TypeScript
echo.
echo Presiona Ctrl+C para detener el servidor
echo ========================================
echo.

REM Start from client directory with proper config
cd client

REM Try different methods to start Vite
echo Intentando iniciar Vite...

REM Method 1: Direct path to vite
if exist "..\node_modules\.bin\vite.cmd" (
    echo Usando vite.cmd desde node_modules...
    call ..\node_modules\.bin\vite.cmd --port 3000 --host 0.0.0.0 --open
) else if exist "..\node_modules\vite\bin\vite.js" (
    echo Usando vite.js con node...
    node ..\node_modules\vite\bin\vite.js --port 3000 --host 0.0.0.0 --open
) else (
    echo Intentando con npm script...
    cd ..
    npm run build:client
    if %errorlevel% equ 0 (
        npm start
    ) else (
        echo ❌ No se pudo iniciar el servidor
        echo Prueba instalando Vite globalmente: npm install -g vite
    )
)

echo.
echo 👋 Servidor detenido
pause