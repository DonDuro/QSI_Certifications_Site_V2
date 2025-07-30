@echo off
title QSI Certifications - Background Persistent
echo.
echo ========================================
echo   QSI Certifications - Background Mode
echo ========================================
echo.

echo 🛑 Parando contenedores existentes...
docker compose -f docker-compose.simple.yml down 2>nul
docker-compose -f docker-compose.simple.yml down 2>nul

echo.
echo 🚀 Iniciando en modo background persistente...
docker compose -f docker-compose.simple.yml up -d --build

if %errorlevel% neq 0 (
    echo ❌ Error con docker compose, intentando docker-compose...
    docker-compose -f docker-compose.simple.yml up -d --build
)

echo.
echo ✅ Contenedor iniciado en background
echo.
echo 🌐 Sitio disponible en: http://localhost:3000
echo.
echo 📋 Comandos útiles:
echo   docker compose -f docker-compose.simple.yml logs -f     (ver logs)
echo   docker compose -f docker-compose.simple.yml down        (parar)
echo   docker compose -f docker-compose.simple.yml ps          (estado)
echo.
echo 💡 El contenedor se reiniciará automáticamente si se detiene
echo 💡 Puedes cerrar esta ventana - el sitio seguirá funcionando
echo.
pause