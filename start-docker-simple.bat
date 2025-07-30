@echo off
title QSI Certifications - Docker Simple
echo.
echo ========================================
echo   QSI Certifications - Docker Simple
echo ========================================
echo.

REM Stop existing containers
echo 🛑 Parando contenedores existentes...
docker-compose -f docker-compose.simple.yml down
docker-compose -f docker-compose.dev.yml down

echo.
echo 🧹 Limpiando...
docker system prune -f

echo.
echo 🚀 Construyendo e iniciando...
docker-compose -f docker-compose.simple.yml up --build

pause