@echo off
title Docker Clean & Rebuild
echo.
echo ========================================
echo   Limpiando Docker y reconstruyendo
echo ========================================
echo.

echo 🛑 Parando contenedores...
docker-compose -f docker-compose.dev.yml down

echo.
echo 🧹 Limpiando imágenes de Docker...
docker system prune -f

echo.
echo 🗑️ Eliminando imagen específica...
docker rmi qsi_certifications_site_v2-app 2>nul

echo.
echo 🚀 Reconstruyendo sin cache...
docker-compose -f docker-compose.dev.yml build --no-cache

echo.
echo ✅ Listo para iniciar
echo Ejecuta: .\start-docker-background.bat
pause