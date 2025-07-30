@echo off
title QSI Certifications - Docker Development
echo.
echo ========================================
echo   QSI Certifications - Docker Dev
echo ========================================
echo.

REM Check if Docker is running
docker info >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Docker no está ejecutándose
    echo Por favor inicia Docker Desktop
    pause
    exit /b 1
)

echo ✅ Docker detectado
echo.

echo 🔧 Parando contenedores existentes...
docker-compose -f docker-compose.dev.yml down

echo.
echo 🚀 Construyendo e iniciando contenedor...
docker-compose -f docker-compose.dev.yml up --build

echo.
echo 👋 Contenedor detenido
pause