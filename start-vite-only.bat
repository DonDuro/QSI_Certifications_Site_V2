@echo off
echo Starting QSI Certifications Frontend (Vite Only)...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js is available
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    npm install
    if %errorlevel% neq 0 (
        echo Error: Failed to install dependencies
        pause
        exit /b 1
    )
    echo.
)

echo Starting Vite development server (frontend only)...
echo The frontend will be available at:
echo - http://localhost:3000
echo.
echo Note: This runs only the frontend. API endpoints will not work.
echo Press Ctrl+C to stop the server
echo.

REM Change to client directory and start Vite
cd client
npx vite --host 0.0.0.0 --port 3000

pause