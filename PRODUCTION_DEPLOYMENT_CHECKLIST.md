# QSI Certifications - Production Deployment Checklist

## Pre-Deployment Verification

### ✅ Code Preparation
- [ ] Version 2.0 backup created in `version-2/` directory
- [ ] All Replit dependencies removed
- [ ] Clean `vite.config.deployment.ts` copied to `vite.config.ts`
- [ ] `.gitignore` configured for production deployment
- [ ] Package.json updated with deployment scripts

### ✅ Documentation Complete
- [ ] DEPLOYMENT_GUIDE.md (comprehensive deployment instructions)
- [ ] README.md (GitHub repository documentation)
- [ ] GITHUB_SETUP.md (repository setup guide)
- [ ] DEPLOYMENT_MEMO.md (executive memo)
- [ ] VERSION_NOTES.md (version 2.0 release notes)

### ✅ Infrastructure Files Ready
- [ ] Dockerfile (multi-stage production build)
- [ ] docker-compose.yml (full stack orchestration)
- [ ] nginx.conf (production reverse proxy)
- [ ] ecosystem.config.js (PM2 process management)
- [ ] .ebextensions/nodejs.config (AWS Elastic Beanstalk)
- [ ] scripts/deploy.sh (automated deployment)

## GitHub Repository Setup

### 1. Create Repository
```bash
# On GitHub:
# Repository name: qsi-certifications-website
# Description: QSI Certifications - ISO Management System Certifications Platform
# Visibility: Private (recommended)
```

### 2. Initial Push
```bash
git init
git add .
git commit -m "Initial commit: QSI Certifications Website v2.0

- Complete ISO management system certification platform
- 14 ISO standard pages with bilingual support
- Production-ready deployment infrastructure
- Removed all Replit dependencies
- AWS and Docker deployment configurations"

git remote add origin https://github.com/your-org/qsi-certifications-website.git
git branch -M main
git push -u origin main
```

### 3. Branch Structure
```bash
git checkout -b development
git push -u origin development

git checkout -b staging  
git push -u origin staging

git checkout main
```

## AWS Deployment Options

### Option 1: AWS Elastic Beanstalk (Recommended)

#### Prerequisites
- [ ] AWS CLI installed and configured
- [ ] Elastic Beanstalk CLI installed
- [ ] RDS PostgreSQL instance created

#### Deployment Steps
```bash
# 1. Initialize Elastic Beanstalk
eb init qsi-certifications --platform node.js --region us-east-1

# 2. Create environment
eb create qsi-production --database.engine postgres

# 3. Set environment variables
eb setenv DATABASE_URL=postgresql://user:pass@rds-endpoint:5432/qsi_db
eb setenv SESSION_SECRET=production-session-secret-here
eb setenv NODE_ENV=production

# 4. Deploy
eb deploy
```

### Option 2: AWS EC2 with Docker

#### Prerequisites
- [ ] EC2 instance launched (t3.medium recommended)
- [ ] Docker and Docker Compose installed
- [ ] RDS PostgreSQL instance created
- [ ] Domain and SSL certificates configured

#### Deployment Steps
```bash
# 1. Clone repository on EC2
git clone https://github.com/your-org/qsi-certifications-website.git
cd qsi-certifications-website

# 2. Configure environment
cp .env.example .env
# Edit .env with production values

# 3. Deploy with Docker
./scripts/deploy.sh docker
```

### Option 3: AWS EC2 with PM2

#### Deployment Steps
```bash
# 1. On EC2 instance
git clone https://github.com/your-org/qsi-certifications-website.git
cd qsi-certifications-website

# 2. Install dependencies and build
npm ci
npm run prepare-deploy

# 3. Configure environment
cp .env.example .env
# Edit .env with production values

# 4. Deploy with PM2
./scripts/deploy.sh production
```

## Environment Configuration

### Required Environment Variables
```env
# Database (Required)
DATABASE_URL=postgresql://user:password@host:5432/qsi_db

# Security (Required)
SESSION_SECRET=your-production-session-secret-32-chars-minimum
NODE_ENV=production

# Server (Required)
PORT=5000

# CORS (Required for production)
CORS_ORIGIN=https://your-domain.com

# Optional: SSL/TLS
SSL_CERT_PATH=/path/to/cert.pem
SSL_KEY_PATH=/path/to/key.pem
```

### Database Setup
```sql
-- Create production database
CREATE DATABASE qsi_db;
CREATE USER qsi_user WITH PASSWORD 'secure_password';
GRANT ALL PRIVILEGES ON DATABASE qsi_db TO qsi_user;

-- Run migrations
npm run db:migrate
```

## Domain and SSL Configuration

### 1. DNS Configuration (Route 53)
```bash
# Create hosted zone
aws route53 create-hosted-zone --name your-domain.com

# Create A record pointing to load balancer or EC2 IP
aws route53 change-resource-record-sets --hosted-zone-id Z123456789 \
  --change-batch file://dns-change.json
```

### 2. SSL Certificate (Certificate Manager)
```bash
# Request certificate
aws acm request-certificate \
  --domain-name your-domain.com \
  --domain-name *.your-domain.com \
  --validation-method DNS \
  --region us-east-1
```

## Post-Deployment Verification

### 1. Application Health
- [ ] Website loads at https://your-domain.com
- [ ] All 14 ISO standard pages accessible
- [ ] Language switching (English/Spanish) works
- [ ] Navigation menus function correctly
- [ ] Contact forms submit successfully
- [ ] Certificate validation portal works
- [ ] Mobile responsive design verified

### 2. Technical Verification
- [ ] HTTPS/SSL certificate valid
- [ ] Database connectivity confirmed
- [ ] Session management working
- [ ] Health check endpoint responding: `/health`
- [ ] Error logging functional
- [ ] Performance metrics acceptable

### 3. Content Verification
- [ ] All text displays correctly in both languages
- [ ] Images and assets load properly
- [ ] Company information accurate
- [ ] Contact information current
- [ ] Policy documents accessible

### 4. Security Verification
- [ ] Security headers present
- [ ] Rate limiting active
- [ ] Database credentials secure
- [ ] Session security configured
- [ ] CORS properly configured

## Monitoring and Maintenance

### 1. Application Monitoring
```bash
# PM2 monitoring
pm2 monit

# Application logs
pm2 logs qsi-certifications

# System monitoring
htop
df -h
```

### 2. Database Backups
```bash
# Automated backup script
pg_dump $DATABASE_URL > backup-$(date +%Y%m%d-%H%M%S).sql

# Set up daily backups via cron
0 2 * * * /path/to/backup-script.sh
```

### 3. SSL Certificate Renewal
```bash
# For Let's Encrypt (if using)
certbot renew --nginx

# For AWS Certificate Manager (automatic renewal)
# Certificates auto-renew before expiration
```

## Rollback Procedures

### Application Rollback
```bash
# PM2 rollback
pm2 stop qsi-certifications
cp -r /var/www/qsi-backup/* /var/www/qsi-certifications/
pm2 start qsi-certifications

# Elastic Beanstalk rollback
eb deploy --version previous-version-label
```

### Database Rollback
```bash
# Restore from backup
psql $DATABASE_URL < backup-20250730-120000.sql
```

## Support Contacts

### Technical Issues
- **Documentation:** Refer to DEPLOYMENT_GUIDE.md
- **Repository:** GitHub issues and documentation
- **Infrastructure:** AWS Support (if using AWS Support plan)

### Content Management
- **Content Updates:** Follow procedures in DEPLOYMENT_GUIDE.md
- **Translation Updates:** Use LanguageContext.tsx management
- **Policy Updates:** Update PolicyViewer component

## Success Criteria

✅ **Deployment Complete When:**
- Website accessible via production domain
- All functionality verified working
- SSL certificate active and valid
- Database connected and functional
- Monitoring and backups configured
- Documentation updated with production URLs

This checklist ensures a complete, secure, and maintainable production deployment of the QSI Certifications website.