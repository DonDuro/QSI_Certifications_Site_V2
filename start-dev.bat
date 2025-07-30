@echo off
echo Starting QSI Certifications Development Server...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: npm is not available
    pause
    exit /b 1
)

echo Node.js and npm are available
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

echo Starting development server...
echo The server will be available at:
echo - http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

REM Copy the correct vite config first
copy vite.config.deployment.ts vite.config.ts >nul 2>&1

REM Set environment variables and start the server
set NODE_ENV=development
set PORT=3000

echo Running npm run dev...
npm run dev

if %errorlevel% neq 0 (
    echo.
    echo Error: Failed to start development server
    echo Trying alternative approach with Vite only...
    echo.
    cd client
    npx vite --host 0.0.0.0 --port 3000
)

pause