# QSI Certifications Website

A comprehensive ISO standards certification platform providing digital solutions for organizational excellence through advanced multilingual management system certifications.

## 🚀 Features

- **14 ISO Management System Standards** - Complete pages for all major ISO certifications
- **Bilingual Support** - Full English/Spanish internationalization
- **Modern Tech Stack** - React 18, TypeScript, Tailwind CSS, Express.js
- **Responsive Design** - Mobile-first approach with modern UI components
- **Professional Services** - Auditing, certification, training, and consulting
- **Global Reach** - Multi-office presence with regional coordinators

## 🛠 Technology Stack

### Frontend
- React 18 with TypeScript
- Vite (build tool)
- Tailwind CSS + shadcn/ui
- Wouter (routing)
- TanStack Query (state management)

### Backend
- Node.js + Express.js
- TypeScript with ESM
- Drizzle ORM
- PostgreSQL

### Infrastructure
- Docker support
- PM2 for process management
- Nginx reverse proxy
- AWS deployment ready

## 📋 Prerequisites

- Node.js 18+
- PostgreSQL
- npm or yarn

## 🚀 Quick Start

1. **Clone the repository:**
```bash
git clone <repository-url>
cd qsi-certifications
```

2. **Install dependencies:**
```bash
npm install
```

3. **Clean Replit dependencies (Important!):**
```bash
# Replace Replit-specific configuration with deployment version
cp vite.config.deployment.ts vite.config.ts
```

3. **Set up environment:**
```bash
cp .env.example .env
# Edit .env with your database credentials
```

4. **Set up database:**
```bash
npm run db:generate
npm run db:migrate
```

5. **Start development server:**
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

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
├── scripts/               # Deployment and utility scripts
└── DEPLOYMENT_GUIDE.md    # Comprehensive deployment instructions
```

## 🌐 Deployment

### Local Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Docker Deployment
```bash
docker-compose up -d
```

### AWS Deployment
See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for comprehensive AWS deployment instructions.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Drizzle Studio (database GUI)

## 🌍 Internationalization

The website supports English and Spanish languages with comprehensive translations for:

- Navigation menus
- Page content
- Forms and validation messages
- ISO standard descriptions
- Corporate policies

Language switching is managed through React Context with persistent user preferences.

## 📄 ISO Standards Covered

The platform provides dedicated pages for 14 ISO management system standards:

- **ISO 9001:2015** - Quality Management Systems
- **ISO 14001:2015** - Environmental Management Systems
- **ISO 45001:2018** - Occupational Health and Safety
- **ISO 18788:2015** - Security Operations Management
- **ISO 50001:2018** - Energy Management Systems
- **ISO/IEC 20000-1:2018** - IT Service Management
- **ISO 21001:2018** - Educational Organizations Management
- **ISO/IEC 27001:2022** - Information Security Management
- **ISO 37001:2025** - Anti-Bribery Management Systems
- **ISO 37301:2021** - Compliance Management Systems
- **ISO 22000:2018** - Food Safety Management
- **ISO 22301:2019** - Business Continuity Management
- **ISO/TS 54001:2019** - Quality Management for Territorial Governance
- **ISO/IEC 42001:2023** - Artificial Intelligence Management Systems

## 🔧 Configuration

### Environment Variables

```env
DATABASE_URL=postgresql://user:password@localhost:5432/qsi_db
NODE_ENV=development
PORT=5000
SESSION_SECRET=your-random-session-secret
```

### Database Configuration

The application uses PostgreSQL with Drizzle ORM. Schema definitions are in `shared/schema.ts`.

## 🎨 Customization

### Adding New Content

1. **New ISO Standard:**
   - Create page in `client/src/pages/iso-XXXXX.tsx`
   - Add routing in `client/src/App.tsx`
   - Add navigation link
   - Add translations

2. **Modify Existing Content:**
   - Page content: `client/src/pages/[page-name].tsx`
   - Navigation: `client/src/components/navigation.tsx`
   - Translations: `client/src/contexts/LanguageContext.tsx`

3. **Styling Changes:**
   - Global styles: `client/src/index.css`
   - Component styles: Tailwind classes in components
   - Theme colors: CSS variables in index.css

### Adding New Languages

1. Update Language type in `LanguageContext.tsx`
2. Add translations for all existing keys
3. Update navigation language selector

## 🔒 Security

- Environment variable validation
- Session-based authentication setup
- CORS and security headers
- Input validation through Zod schemas
- SQL injection prevention via Drizzle ORM

## 📊 Monitoring

- Health check endpoint: `/health`
- PM2 process monitoring
- Structured logging
- Error tracking and reporting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For technical support or questions about the QSI Certifications platform:

- Visit: [QSI Certifications Website](https://qsicertifications.com)
- Email: info@qsiglobalventures.com

## 📄 License

This project is proprietary software developed for QSI Auditing and Certification Services, LLC.

---

**QSI Auditing and Certification Services, LLC** - Advancing Organizational Excellence Through ISO Management System Certifications