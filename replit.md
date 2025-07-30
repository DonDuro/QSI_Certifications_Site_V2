# QSI Certifications Web Application

## Overview

This is a full-stack web application for QSI Certifications, a professional auditing and certification services company. The application features a modern React frontend with a Node.js/Express backend, utilizing PostgreSQL for data persistence and implementing a comprehensive UI component library. The homepage showcases QSI's core services including ISO management system certifications and QSI ProCert credentialing services offered in collaboration with QSI Academy.

## Recent Changes

- **January 29, 2025**: Fixed text readability issues across all recruitment and business opportunity pages by improving contrast from text-gray-600/text-gray-700 to text-gray-700/text-gray-800 for better legibility on light backgrounds
- **January 29, 2025**: Updated homepage with authentic QSI branding and styling
- **January 29, 2025**: Connected navigation to actual pages - added History, Accreditations, and Corporate Policies pages
- Removed ProCert section entirely from homepage to focus on management system certification
- Created three new pages with authentic content from QSI website matching navigation structure
- Added Certificate Validation page with QR scanning and manual input features
- Created comprehensive Contact page with global office locations (Orlando, Madrid, San José, Santo Domingo) and multiple inquiry types
- Added Business Opportunity page with Regional Business Partner (RBP) and Regional Business Unit (RBU) information
- Connected partnership opportunities from homepage to dedicated business opportunity page
- Updated all clickable elements throughout the site to default to Contact Us page as requested
- Maintained specific functionality for "Get Certified" (Nebusis form) and "Schedule Audit" (Contact page) buttons
- Navigation redesigned with orange dropdown menus matching company colors
- Implemented proper submenu structure for About, Certification Programs, and Language selection
- Added three-level navigation with ISO standards sub-submenu (9001:2015, 14001:2015, 45001:2018, 50001:2018, 22000:2018, 27001:2013)
- Updated carousel to focus entirely on management system certifications and global excellence
- Minimized QSI ProCert references to focus primarily on management system certifications
- Integrated high-quality client logos (PepsiCo, Medtronic, US Department of State, Pfizer, Coca-Cola, Dominican Republic Government)
- Updated footer with correct company name: "QSI Auditing and Certification Services, LLC"
- Ensured consistent branding with "QSI ProCert" (never just "ProCert")
- Updated navigation to gray background with white QSI logo matching original design
- Replaced placeholder logo with authentic QSI Certifications logo in navigation and footer
- Fixed DOM nesting errors in navigation component
- Removed all contact information (phone numbers, emails) from office locations - displaying addresses and timezones only
- Removed Certificate Validation page and navigation links per user request
- Added official accreditation logos in footer: ABA (Accreditation Board of America) and EMA (Entidad Mexicana de Acreditación)
- **January 29, 2025**: Created comprehensive Version 1 backup in `version-1/` directory containing complete site snapshot
- **January 29, 2025**: Removed "Program" menu item and all Performance Commitment Charter certification content to focus exclusively on management systems certification
- Deleted performance-commitment.tsx page and removed related translations from language context
- Updated navigation to show only ISO management systems certification under Certification Programs menu
- Streamlined site to focus solely on QSI's core business: management systems certification services
- **January 29, 2025**: Created dedicated pages for all 13 ISO management system standards
- Added comprehensive ISO standard pages: ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, ISO 18788:2015, ISO 50001:2018, ISO/IEC 20000-1:2018, ISO 21001:2018, ISO/IEC 27001:2022, ISO 37001:2025, ISO 37301:2021, ISO 22000:2018, ISO 22301:2019, ISO/TS 54001:2019, ISO/IEC 42001:2023
- Updated all ISO pages with complete detailed content structure following outline format
- Each page includes: History of Standard, Key Benefits, Latest Version, Why Certify, Steps for Certification sections
- Added big hero images and visual elements to enhance user experience across all ISO standard pages
- Integrated authentic QSI certification process with proper Nebusis form links for "Get Certified" buttons
- Color-coded themes for visual distinction: Quality (blue), Environmental (green), Safety (red), Security (gray), Energy (yellow), IT Service (blue), Educational (indigo), Information Security (purple), Anti-bribery (teal), Compliance (emerald), Food Safety (blue), Business Continuity (orange), Territorial Governance (slate), AI Management (indigo)
- Added new ISO/IEC 42001:2023 (Artificial Intelligence Management Systems) page with comprehensive content
- Updated navigation translations to include all new ISO standards in both English and Spanish
- All 13 standards properly routed and functional with comprehensive content and proper CTAs
- **January 29, 2025**: Restored Certificate Validation portal with QR scan and manual input options
- Added Certificate Validation button prominently to navigation menu using consistent QSI brand colors
- Fixed all validation result colors to use QSI navy (valid) and orange (invalid/pending) instead of bright colors for brand consistency
- **January 29, 2025**: Created comprehensive FAQ section addressing certification service clarifications
- Added FAQ covering: scope of certification services vs audits, remote audit technology and security, auditor competency validation, accreditation details, global operations, and certificate management
- Integrated FAQ into About navigation menu for easy access
- FAQ addresses key client-facing service clarifications and compliance requirements
- **January 29, 2025**: Integrated authentic QSI policy documents into Corporate Policies page
- Created PolicyViewer component for displaying complete policy content in modal dialogs
- Added 6 official QSI policies: Quality Policy, Social Responsibility Policy, Ethics Code, Impartiality Policy, Handling Complaints and Appeals, and Management System Certification Procedures
- Each policy includes version information, approval details, and complete policy text from official QSI documents
- Updated Corporate Policies page colors to use consistent QSI navy and orange branding throughout
- **January 29, 2025**: Completed comprehensive Spanish translation audit and fixes
- Added 60+ missing translations covering Contact, History, FAQ, Corporate Policies, and Certificate Validation pages
- Enhanced LanguageContext with complete bilingual functionality for all interface elements, forms, and content sections
- **January 30, 2025**: Systematic ISO pages translation implementation
- Completed comprehensive Spanish translations for ISO 18788, ISO 9001, ISO 14001, and ISO 45001 pages (4 of 14 ISO standards)
- Each translated page includes complete bilingual content: hero sections, history, benefits, certification steps, training CTAs, and final call-to-action sections
- Added 50+ new translation keys specific to each ISO standard covering all page content sections
- Cleaned up duplicate translation keys to ensure error-free compilation and consistent bilingual functionality
- **January 30, 2025**: Complete Spanish translation of all corporate policies
- Updated all 6 QSI corporate policies with comprehensive bilingual content: Quality Policy, Social Responsibility Policy, Ethics Code, Impartiality Policy, Handling Complaints and Appeals, and Management System Certification Procedures
- Modified policy data structure to support bilingual content with separate English and Spanish versions for titles, introductions, policy statements, and section content
- Updated PolicyViewer component to dynamically display content based on selected language (English/Spanish)
- All policy metadata, content sections, and external links now fully functional in both languages
- **January 29, 2025**: Updated Orlando office photo on History page with authentic QSI headquarters building image
- **January 29, 2025**: Added comprehensive training and digital transformation CTAs to all 14 ISO standard pages
- Each ISO standard page now includes dedicated CTA sections linking to QSI Academy (training) and Nebusis (digital transformation)
- Training CTAs feature QSI orange branding with GraduationCap icons and standard-specific messaging
- Digital transformation CTAs use QSI navy outline styling with Monitor icons and platform-specific descriptions
- CTAs positioned strategically before main certification call-to-action sections for optimal user flow
- All external links open in new tabs with proper security attributes for seamless user experience
- **January 29, 2025**: Major navigation restructure - created "Join Us" parent menu with four submenus
- Added four new dedicated pages: Partners (existing business-opportunity), Auditors, Instructors, and Collaborators
- Updated contact page to redirect all team member inquiries (partners, auditors, instructors, collaborators) to unified Nebusis application form
- New collaborator page details diverse roles in Business Development (Sales, Marketing, Strategic Relations), Service Coordination, and Administration (Legal, Accounting, HR, IT)
- All team application pathways now use single Nebusis collaborator form for streamlined recruitment process
- Added comprehensive Spanish translations for all new Join Us menu items and page content
- **January 30, 2025**: Created comprehensive Key Contacts section featuring QSI leadership and coordinators
- Added dedicated Key Contacts page with individual profile cards for 7 team members including CEO Dr. Celso Alvarado and regional coordinators
- Implemented dynamic contact form with secure email routing to appropriate team members without exposing email addresses
- Added spam protection with honeypot field and form validation for secure communication
- Integrated Key Contacts navigation item in both desktop and mobile menus
- Updated Contact Us page with prominent notice directing users to Key Contacts for specific team member inquiries
- Backend API endpoint handles contact form submissions with proper email routing to qsiglobalventures.com addresses
- Restructured Contact Us navigation into dropdown menu with General Inquiries and Key Contacts sub-menus
- Navigation structure now: Home → About → Certification Programs → Certificate Validation → Join Us (Partners, Auditors, Instructors, Collaborators) → Contact Us (General Inquiries, Key Contacts) → Language
- **January 30, 2025**: Created comprehensive deployment infrastructure for GitHub and AWS deployment
- Added complete DEPLOYMENT_GUIDE.md with detailed instructions for local development, content management, and AWS deployment
- Created production-ready configuration files: Dockerfile, docker-compose.yml, nginx.conf, PM2 ecosystem config
- Added AWS Elastic Beanstalk configuration and automated deployment scripts
- Generated README.md for GitHub repository with project overview, setup instructions, and feature documentation
- Added .env.example template for environment configuration
- Project fully prepared for independent deployment outside Replit environment

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **API Style**: RESTful API with `/api` prefix
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: Express sessions with PostgreSQL store

### Database Architecture
- **Database**: PostgreSQL (configured for Neon serverless)
- **Schema Management**: Drizzle Kit for migrations
- **Type Safety**: Drizzle Zod for runtime validation

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with responsive mobile menu
2. **Hero Carousel**: Auto-rotating carousel with certification messaging
3. **Services Section**: ISO certification program showcase
4. **Client Showcase**: Certification badges and client testimonials
5. **Call to Action**: Partnership and representative program promotion
6. **Footer**: Comprehensive site navigation and company information

### Backend Components
1. **Storage Interface**: Abstracted storage layer with in-memory and database implementations
2. **Route Registration**: Centralized API route management
3. **Vite Integration**: Development server with HMR support
4. **Error Handling**: Centralized error middleware

### UI Component Library
- Complete shadcn/ui implementation with Radix UI primitives
- Consistent design system with CSS variables for theming
- Responsive components optimized for mobile and desktop
- Accessibility-first approach with proper ARIA attributes

## Data Flow

### Client-Server Communication
1. **API Requests**: Centralized through `apiRequest` utility with error handling
2. **Query Management**: TanStack Query handles caching, background updates, and error states
3. **Type Safety**: Shared TypeScript types between frontend and backend via `@shared` module

### Database Operations
1. **Schema Definition**: Centralized in `shared/schema.ts` with Drizzle table definitions
2. **Type Generation**: Automatic TypeScript types from database schema
3. **Validation**: Zod schemas for runtime validation of user inputs

### State Management
1. **Server State**: TanStack Query for API data caching and synchronization
2. **Client State**: React hooks and context for local component state
3. **Form State**: React Hook Form integration with validation

## External Dependencies

### Development Tools
- **Replit Integration**: Vite plugin for development environment
- **TypeScript**: Full type safety across the application
- **ESBuild**: Fast production builds for the server

### UI Libraries
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Type-safe component variants

### Backend Services
- **Neon Database**: Serverless PostgreSQL hosting
- **Express Session**: Session management with PostgreSQL persistence

### Frontend Libraries
- **Wouter**: Lightweight router alternative to React Router
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling with validation
- **Date-fns**: Date manipulation utilities

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to static assets in `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Database Migrations**: Drizzle Kit manages schema changes

### Environment Configuration
- **Development**: Vite dev server with Express API proxy
- **Production**: Express serves static files and API routes
- **Database**: Environment-based connection strings

### File Structure
- **Client**: React application in `client/` directory
- **Server**: Express application in `server/` directory
- **Shared**: Common types and schemas in `shared/` directory
- **Assets**: Static assets referenced via `@assets` alias

### Security Considerations
- Environment variable validation for database connection
- Session-based authentication setup (implementation pending)
- CORS and security headers (implementation pending)
- Input validation through Zod schemas

The application follows modern full-stack development practices with a focus on type safety, developer experience, and maintainability. The architecture supports both rapid development and production scalability.