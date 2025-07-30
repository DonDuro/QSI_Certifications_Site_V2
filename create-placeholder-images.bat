@echo off
title Create Placeholder Images
echo.
echo ========================================
echo   Creando imágenes placeholder
echo ========================================
echo.

echo 📁 Creando directorio attached_assets...
if not exist "attached_assets" mkdir attached_assets

echo 🖼️ Las imágenes se crearán con URLs de placeholder
echo ✅ Directorio creado
echo.
echo 🔧 Ahora ejecuta el Docker de nuevo
pause