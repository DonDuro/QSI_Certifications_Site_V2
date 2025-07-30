# GitHub Repository Setup Guide

## Initial Repository Creation

### 1. Create GitHub Repository

```bash
# On GitHub.com:
# 1. Click "New repository"
# 2. Name: qsi-certifications-website
# 3. Description: QSI Certifications - ISO Management System Certifications Platform
# 4. Set to Private (recommended for proprietary code)
# 5. Don't initialize with README (we have our own)
```

### 2. Initialize Local Git Repository

```bash
# Initialize git in project root
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: QSI Certifications Website v2.0

- Complete ISO management system certification platform
- 14 ISO standard pages with bilingual support
- Production-ready deployment infrastructure
- Removed all Replit dependencies
- AWS and Docker deployment configurations"

# Add remote origin
git remote add origin https://github.com/your-username/qsi-certifications-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Repository Configuration

#### Branches
```bash
# Create development branch
git checkout -b development
git push -u origin development

# Create staging branch  
git checkout -b staging
git push -u origin staging

# Return to main
git checkout main
```

#### Branch Protection Rules
In GitHub repository settings:
- **main branch:** Require pull request reviews, require status checks
- **staging branch:** Require pull request reviews
- **development branch:** Allow direct pushes for development

## Repository Structure

```
qsi-certifications-website/
├── .github/
│   └── workflows/           # GitHub Actions (CI/CD)
├── client/                  # Frontend React application
├── server/                  # Backend Express application
├── shared/                  # Shared types and schemas
├── scripts/                 # Deployment scripts
├── .ebextensions/          # AWS Elastic Beanstalk config
├── version-1/              # Version 1 backup
├── version-2/              # Version 2 backup
├── Dockerfile              # Container configuration
├── docker-compose.yml      # Development stack
├── nginx.conf              # Production proxy config
├── ecosystem.config.js     # PM2 configuration
├── .gitignore              # Git ignore rules
├── .env.example            # Environment template
├── README.md               # Repository documentation
├── DEPLOYMENT_GUIDE.md     # Deployment instructions
├── DEPLOYMENT_MEMO.md      # Executive memo
└── package.json            # Dependencies and scripts
```

## Environment Setup for GitHub Actions

### 1. Repository Secrets

Add these secrets in GitHub repository settings:

```
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
DATABASE_URL=postgresql://user:pass@host:5432/db
SESSION_SECRET=production-session-secret
DOCKER_HUB_USERNAME=your-docker-username (optional)
DOCKER_HUB_TOKEN=your-docker-token (optional)
```

### 2. Environment Variables

Repository variables (non-sensitive):
```
AWS_REGION=us-east-1
NODE_ENV=production
PORT=5000
```

## GitHub Actions Workflows

### 1. Continuous Integration

Create `.github/workflows/ci.yml`:
```yaml
name: CI

on:
  pull_request:
    branches: [ main, staging ]
  push:
    branches: [ development ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Clean Replit dependencies
      run: cp vite.config.deployment.ts vite.config.ts
    
    - name: Type check
      run: npm run check
    
    - name: Build
      run: npm run build
```

### 2. Deployment to AWS

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Clean Replit dependencies
      run: cp vite.config.deployment.ts vite.config.ts
    
    - name: Build application
      run: npm run build
    
    - name: Deploy to AWS Elastic Beanstalk
      uses: einaregilsson/beanstalk-deploy@v21
      with:
        aws_access_key: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws_secret_key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        application_name: qsi-certifications
        environment_name: qsi-production
        version_label: ${{ github.sha }}
        region: us-east-1
        deployment_package: deployment-package.zip
```

## Development Workflow

### 1. Feature Development
```bash
# Create feature branch
git checkout development
git pull origin development
git checkout -b feature/new-iso-standard

# Make changes
# ... develop feature ...

# Commit and push
git add .
git commit -m "Add ISO XXXXX:20XX standard page"
git push origin feature/new-iso-standard

# Create pull request to development branch
```

### 2. Release Process
```bash
# Merge development to staging
git checkout staging
git merge development
git push origin staging

# Test on staging environment
# ... perform testing ...

# Merge staging to main for production
git checkout main
git merge staging
git push origin main

# Tag release
git tag -a v2.1.0 -m "Version 2.1.0: Added new ISO standard"
git push origin v2.1.0
```

## Repository Maintenance

### 1. Regular Updates
- Update dependencies monthly: `npm update`
- Security audit: `npm audit fix`
- Update documentation as features are added

### 2. Backup Strategy
- Version directories maintain historical snapshots
- Database backups separate from code repository
- Environment configurations stored securely

### 3. Access Control
- Limit repository access to authorized personnel
- Use branch protection rules
- Require code reviews for production changes
- Enable security alerts for vulnerabilities

## Documentation Standards

### Commit Messages
Follow conventional commit format:
```
feat: add new ISO standard page
fix: resolve navigation dropdown issue
docs: update deployment guide
refactor: improve translation management
```

### Pull Request Template
Create `.github/pull_request_template.md`:
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactoring

## Testing
- [ ] Local testing completed
- [ ] All builds pass
- [ ] No breaking changes

## Checklist
- [ ] Code reviewed
- [ ] Documentation updated
- [ ] Environment variables updated (if needed)
```

This setup ensures professional GitHub repository management with proper CI/CD, security, and collaboration workflows.