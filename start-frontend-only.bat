@echo off
echo Starting QSI Certifications Frontend Only...
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

echo Starting frontend development server...
echo The application will be available at:
echo - http://localhost:3000
echo.
echo Note: This runs only the React frontend.
echo API endpoints will not work, but you can see the UI.
echo Press Ctrl+C to stop the server
echo.

REM Copy vite config to root first
copy vite.config.deployment.ts vite.config.ts >nul 2>&1

REM Change to client directory and start Vite directly
cd client
echo Starting Vite with npx...
npx vite --host 0.0.0.0 --port 3000 --open

pause