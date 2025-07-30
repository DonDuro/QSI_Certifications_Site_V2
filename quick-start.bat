@echo off
echo Starting QSI Certifications...
echo.

REM Install dependencies if needed
if not exist "node_modules" (
    echo Installing dependencies...
    npm install
)

echo.
echo Starting development server...
echo Opening browser at http://localhost:3000
echo.

REM Try the npm script first
npm run build:client
if %errorlevel% equ 0 (
    echo Build successful, starting server...
    npm start
) else (
    echo Build failed, trying Vite directly...
    cd client
    npx vite --port 3000 --open
)

pause