# QSI Certifications Website - Deployment & Development Guide

## Overview

This is a full-stack TypeScript web application for QSI Certifications built with React, Express, and PostgreSQL. This guide covers everything needed to deploy and modify the website independently.

## Technology Stack

### Frontend
- **React 18** with TypeScript
- **Vite** - Build tool and dev server
- **Wouter** - Client-side routing
- **Tailwind CSS** - Styling framework
- **shadcn/ui** - Component library
- **TanStack Query** - Server state management

### Backend
- **Node.js** with Express.js
- **TypeScript** with ESM modules
- **Drizzle ORM** - Database operations
- **PostgreSQL** - Database

## Prerequisites

Before deploying or developing, ensure you have:

1. **Node.js 18+** installed
2. **npm** or **yarn** package manager
3. **PostgreSQL** database (local or cloud)
4. **Git** for version control
5. **AWS CLI** configured (for AWS deployment)

## Local Development Setup

### 1. Clone and Install Dependencies

```bash
git clone <your-repository-url>
cd qsi-certifications
npm install
```

### 2. Remove Replit Dependencies (Important!)

For independent deployment, replace the Replit-specific vite.config.ts:

```bash
# Replace vite.config.ts with clean version for deployment
cp vite.config.deployment.ts vite.config.ts
```

This removes Replit-specific plugins that are not needed for independent deployment.

### 2. Environment Configuration

Create a `.env` file in the root directory:

```env
# Database Configuration
DATABASE_URL=postgresql://username:password@localhost:5432/qsi_db

# Server Configuration
NODE_ENV=development
PORT=5000

# Session Configuration (generate random string)
SESSION_SECRET=your-random-session-secret-here
```

### 3. Database Setup

```bash
# Generate and run migrations
npm run db:generate
npm run db:migrate

# Optional: Seed with sample data
npm run db:seed
```

### 4. Start Development Server

```bash
npm run dev
```

This starts both frontend (Vite) and backend (Express) servers with hot reload.

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── contexts/       # React contexts (Language, etc.)
│   │   └── lib/           # Utilities and configurations
├── server/                 # Backend Express application
│   ├── routes.ts          # API route definitions
│   ├── storage.ts         # Data access layer
│   └── index.ts           # Server entry point
├── shared/                 # Shared types and schemas
│   └── schema.ts          # Database schema definitions
└── package.json           # Dependencies and scripts
```

## Content Management

### Adding New ISO Standards

1. **Create the page file:**
```bash
# Create new file: client/src/pages/iso-XXXXX.tsx
# Copy structure from existing ISO page (e.g., iso-9001.tsx)
```

2. **Add routing:**
```typescript
// In client/src/App.tsx
<Route path="/iso-XXXXX" component={ISOXXXXX} />
```

3. **Add navigation:**
```typescript
// In client/src/components/navigation.tsx
// Add to certificationPrograms.items array
{ label: t('standardName'), href: "/iso-XXXXX" }
```

4. **Add translations:**
```typescript
// In client/src/contexts/LanguageContext.tsx
// Add all necessary translation keys for the new standard
```

### Modifying Existing Content

#### 1. Page Content
- **Location:** `client/src/pages/[page-name].tsx`
- **Example:** Modify homepage content in `client/src/pages/home.tsx`

#### 2. Navigation Menu
- **Location:** `client/src/components/navigation.tsx`
- **Modify:** Menu items, dropdown structure, links

#### 3. Translations
- **Location:** `client/src/contexts/LanguageContext.tsx`
- **Add new translations:** Add key-value pairs to the translations object
- **Modify existing:** Update English/Spanish text

#### 4. Styling
- **Global styles:** `client/src/index.css`
- **Component styles:** Tailwind classes in component files
- **Theme colors:** CSS variables in `client/src/index.css`

### Adding New Languages

1. **Update Language type:**
```typescript
// In client/src/contexts/LanguageContext.tsx
type Language = 'en' | 'es' | 'fr'; // Add new language code
```

2. **Add translations:**
```typescript
// Add third language to all translation objects
translationKey: { 
  en: 'English text', 
  es: 'Spanish text', 
  fr: 'French text' 
}
```

3. **Update navigation:**
```typescript
// Add new language option to navigation menu
```

## Database Management

### Schema Changes

1. **Modify schema:**
```typescript
// Edit shared/schema.ts
// Add/modify table definitions using Drizzle syntax
```

2. **Generate migration:**
```bash
npm run db:generate
```

3. **Apply migration:**
```bash
npm run db:migrate
```

### Adding New Data Tables

```typescript
// In shared/schema.ts
export const newTable = pgTable('new_table', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  createdAt: timestamp('created_at').defaultNow()
});

// Export the type
export type NewTable = typeof newTable.$inferSelect;
export type InsertNewTable = typeof newTable.$inferInsert;
```

## AWS Deployment

### 1. Database Setup (RDS)

```bash
# Create PostgreSQL RDS instance
aws rds create-db-instance \
  --db-instance-identifier qsi-postgres \
  --db-instance-class db.t3.micro \
  --engine postgres \
  --master-username admin \
  --master-user-password YourSecurePassword \
  --allocated-storage 20
```

### 2. Application Deployment (EC2 + Load Balancer)

#### Option A: EC2 with PM2

1. **Launch EC2 instance:**
```bash
# Ubuntu 22.04 LTS recommended
# Install Node.js, npm, PostgreSQL client
```

2. **Deploy application:**
```bash
# On EC2 instance
git clone <your-repo>
cd qsi-certifications
npm install
npm run build

# Set environment variables
export DATABASE_URL="postgresql://admin:password@rds-endpoint:5432/qsi_db"
export NODE_ENV="production"
export SESSION_SECRET="production-secret"

# Start with PM2
npm install -g pm2
pm2 start npm --name "qsi-app" -- start
pm2 startup
pm2 save
```

3. **Configure Nginx:**
```nginx
# /etc/nginx/sites-available/qsi
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### Option B: Elastic Beanstalk

1. **Prepare deployment:**
```bash
# Create .ebextensions/nodejs.config
option_settings:
  aws:elasticbeanstalk:container:nodejs:
    NodeCommand: "npm start"
    NodeVersion: 18.x
```

2. **Deploy:**
```bash
# Install EB CLI
pip install awsebcli

# Initialize and deploy
eb init
eb create qsi-production
eb deploy
```

### 3. Domain and SSL

```bash
# Route 53 for domain
aws route53 create-hosted-zone --name your-domain.com

# Certificate Manager for SSL
aws acm request-certificate \
  --domain-name your-domain.com \
  --validation-method DNS
```

## Production Build

### Build Commands

```bash
# Build frontend
npm run build:client

# Build backend
npm run build:server

# Build both
npm run build

# Start production server
npm start
```

### Environment Variables (Production)

```env
DATABASE_URL=postgresql://user:pass@rds-endpoint:5432/qsi_db
NODE_ENV=production
PORT=5000
SESSION_SECRET=production-random-secret
CORS_ORIGIN=https://your-domain.com
```

## Common Modifications

### 1. Changing Company Information

**Location:** Multiple files need updates
- `client/src/components/hero-carousel.tsx` - Main messaging
- `client/src/components/footer.tsx` - Contact information
- `client/src/pages/contact.tsx` - Office locations
- `client/src/contexts/LanguageContext.tsx` - All text content

### 2. Adding New Services

1. Create new page in `client/src/pages/`
2. Add navigation link
3. Add translations
4. Update any relevant components

### 3. Modifying Forms

**Contact forms:** `client/src/pages/contact.tsx`, `client/src/pages/key-contacts.tsx`
- Update form fields
- Modify validation schemas
- Update backend API if needed

### 4. Changing Visual Design

**Colors:** Update CSS variables in `client/src/index.css`
```css
:root {
  --qsi-navy: 220 26% 14%;
  --qsi-orange: 24 95% 53%;
}
```

**Components:** Modify Tailwind classes in component files
**Layout:** Update component structure and grid systems

## Monitoring and Maintenance

### Health Checks

Add to your server:
```typescript
// In server/routes.ts
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});
```

### Logging

```bash
# PM2 logs
pm2 logs qsi-app

# Application logs
tail -f /var/log/qsi-app.log
```

### Database Backups

```bash
# Automated backup script
pg_dump $DATABASE_URL > backup-$(date +%Y%m%d).sql

# Restore
psql $DATABASE_URL < backup-20240130.sql
```

## Troubleshooting

### Common Issues

1. **Build failures:** Check TypeScript errors, missing dependencies
2. **Database connection:** Verify DATABASE_URL and network access
3. **Environment variables:** Ensure all required variables are set
4. **Port conflicts:** Check if port 5000 is available

### Debug Commands

```bash
# Check application status
pm2 status

# View logs
pm2 logs qsi-app --lines 100

# Restart application
pm2 restart qsi-app

# Database connection test
psql $DATABASE_URL -c "SELECT version();"
```

## Security Considerations

1. **Environment Variables:** Never commit `.env` files
2. **Database:** Use strong passwords, restrict network access
3. **SSL:** Always use HTTPS in production
4. **Session Security:** Use secure session configuration
5. **Updates:** Regularly update dependencies

## Support and Documentation

- **Framework docs:** React, Express, Drizzle ORM documentation
- **Deployment:** AWS documentation for EC2, RDS, Route 53
- **Styling:** Tailwind CSS and shadcn/ui documentation

This guide provides comprehensive instructions for deploying and maintaining the QSI Certifications website independently of Replit.