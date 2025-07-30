@echo off
title QSI Certifications - Docker Background
echo.
echo ========================================
echo   QSI Certifications - Docker Background
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
echo 🚀 Iniciando en background...
docker-compose -f docker-compose.dev.yml up --build -d

echo.
echo ✅ Contenedor iniciado en background
echo.
echo 🌐 Aplicación disponible en:
echo   - http://localhost:3000 (Frontend)  
echo   - http://localhost:5000 (Fullstack)
echo.
echo 📋 Comandos útiles:
echo   docker-compose -f docker-compose.dev.yml logs -f    (ver logs)
echo   docker-compose -f docker-compose.dev.yml down       (parar)
echo   docker-compose -f docker-compose.dev.yml restart    (reiniciar)
echo.
pause