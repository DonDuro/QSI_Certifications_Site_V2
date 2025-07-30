# QSI Certifications Development Guide

## Quick Start Scripts

### Windows Users

**Option 1: Full Development Server (Recommended)**
- Double-click `start-dev.bat` or `start-dev.ps1`
- Includes both frontend and backend API
- Available at http://localhost:3000

**Option 2: Frontend Only (Vite)**
- Double-click `start-vite-only.bat`
- Only frontend, no API functionality
- Faster startup, good for UI development

### Manual Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Start Frontend Only**
   ```bash
   cd client
   npx vite --host 0.0.0.0 --port 3000
   ```

## Troubleshooting

### Port Issues
If port 3000 is busy, the scripts will try alternative ports automatically.

### WSL2 Network Issues
If running in WSL2 and can't access from Windows browser:
1. Use the network IP shown in the terminal
2. Try: `explorer.exe http://localhost:3000` from WSL
3. Configure port forwarding (see PowerShell commands below)

### PowerShell Port Forwarding (Admin)
```powershell
# Get WSL IP
$wslIP = (wsl hostname -I).Trim()

# Forward port 3000
netsh interface portproxy add v4tov4 listenport=3000 listenaddress=0.0.0.0 connectport=3000 connectaddress=$wslIP

# Remove forwarding when done
netsh interface portproxy delete v4tov4 listenport=3000 listenaddress=0.0.0.0
```

## Git Repository Management

The `.gitignore` file has been configured to exclude:
- `node_modules/` (dependencies)
- `dist/` and `build/` (build outputs)
- Environment files (`.env*`)
- IDE files (`.vscode/`, `.idea/`)
- OS files (`.DS_Store`, `Thumbs.db`)
- Logs and cache files

## Project Structure

```
QSI_Certifications_Site_V2/
├── client/          # React frontend
├── server/          # Express backend
├── shared/          # Shared schemas and types
├── start-dev.bat    # Windows batch script
├── start-dev.ps1    # PowerShell script
└── package.json     # Dependencies and scripts
```