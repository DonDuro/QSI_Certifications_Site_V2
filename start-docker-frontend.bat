@echo off
title QSI Certifications - Docker Frontend Only
echo.
echo ========================================
echo   QSI Certifications - Frontend Only
echo ========================================
echo.

REM Stop all existing containers
echo 🛑 Parando contenedores...
docker-compose -f docker-compose.simple.yml down 2>nul
docker-compose -f docker-compose.dev.yml down 2>nul
docker-compose -f docker-compose.frontend.yml down 2>nul

echo.
echo 🧹 Limpiando Docker...
docker system prune -f

echo.
echo 🚀 Iniciando solo el frontend...
echo.
echo   ⚡ Solo React + Vite (sin servidor backend)
echo   🌐 Disponible en: http://localhost:3000
echo   🔥 Hot reload activado
echo.
docker-compose -f docker-compose.frontend.yml up --build

pause