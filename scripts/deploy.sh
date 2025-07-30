#!/bin/bash

# QSI Certifications Deployment Script
# Usage: ./scripts/deploy.sh [environment]

set -e

ENVIRONMENT=${1:-production}

echo "🚀 Deploying QSI Certifications to $ENVIRONMENT..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Remove Replit dependencies for independent deployment
echo "🧹 Cleaning Replit dependencies..."
if [ -f "vite.config.deployment.ts" ]; then
  cp vite.config.deployment.ts vite.config.ts
  echo "✅ Replaced vite.config.ts with clean deployment version"
fi

# Run tests (if you have them)
# echo "🧪 Running tests..."
# npm test

# Build application
echo "🔨 Building application..."
npm run build

# Database migrations
echo "🗄️  Running database migrations..."
npm run db:migrate

case $ENVIRONMENT in
  "production")
    echo "🌐 Deploying to production..."
    
    # Stop current application
    pm2 stop qsi-certifications || true
    
    # Backup current version
    if [ -d "/var/www/qsi-backup" ]; then
      rm -rf /var/www/qsi-backup
    fi
    
    if [ -d "/var/www/qsi-certifications" ]; then
      mv /var/www/qsi-certifications /var/www/qsi-backup
    fi
    
    # Deploy new version
    mkdir -p /var/www/qsi-certifications
    cp -r dist/ package*.json /var/www/qsi-certifications/
    cd /var/www/qsi-certifications
    npm ci --only=production
    
    # Start application
    pm2 start ecosystem.config.js --env production
    pm2 save
    
    echo "✅ Production deployment complete!"
    ;;
    
  "staging")
    echo "🎭 Deploying to staging..."
    # Add staging deployment logic here
    ;;
    
  "docker")
    echo "🐳 Building and starting Docker containers..."
    docker-compose down
    docker-compose build
    docker-compose up -d
    echo "✅ Docker deployment complete!"
    ;;
    
  *)
    echo "❌ Unknown environment: $ENVIRONMENT"
    echo "Available environments: production, staging, docker"
    exit 1
    ;;
esac

echo "🎉 Deployment to $ENVIRONMENT completed successfully!"