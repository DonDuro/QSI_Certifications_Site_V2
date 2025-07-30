@echo off
title Download Company Logos
echo.
echo ========================================
echo   Descargando logos de empresas
echo ========================================
echo.

REM Navigate to assets directory
cd client\public\assets

echo 📥 Descargando logos alternativos...

REM Download alternative logos with curl
curl -L -o "google-logo.png" "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png"
curl -L -o "microsoft-logo.png" "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/320px-Microsoft_logo.svg.png"
curl -L -o "amazon-logo.png" "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png"

echo ✅ Logos descargados
echo.
pause