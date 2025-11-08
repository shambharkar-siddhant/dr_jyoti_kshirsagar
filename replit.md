# DentalGlow Website

## Overview

A mobile-first, friendly dental clinic website for a single-doctor practice. The application focuses on creating a warm, approachable user experience with conversational tone and easy appointment booking through WhatsApp. Built with React, Express, and PostgreSQL using a full-stack TypeScript architecture.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query (React Query) for server state
- **Form Handling**: React Hook Form with Zod validation

**Design System**:
- Mobile-first responsive design
- Custom color palette: Soft Teal (#11A7A7) primary, Warm Sand/Peach (#F6E7DA) accent
- Typography: Poppins for headings, Inter for body text
- Rounded corners (lg/2xl), subtle shadows, smooth transitions
- Large touch targets (minimum 48px) for mobile interaction

**Key Pages**:
1. Home - Hero section with doctor portrait, before/after sliders, testimonials, FAQ
2. Services - Service cards with detailed individual service pages
3. About - Doctor biography and clinic approach
4. Book - Appointment booking interface

**Custom Components**:
- BeforeAfterSlider - Interactive image comparison for smile transformations
- BookingForm - WhatsApp-integrated appointment booking
- StickyBookingBar - Persistent booking CTA that appears on scroll
- FloatingEmojis - Decorative UI elements for warmth

### Backend Architecture

**Framework**: Express.js with TypeScript
- **Build Tool**: Vite for frontend bundling, esbuild for backend compilation
- **Development**: tsx for TypeScript execution in development
- **Module System**: ES Modules throughout

**Server Structure**:
- Express app with JSON middleware
- Custom request logging middleware
- Vite dev server integration in development
- Static file serving in production

**Storage Interface**:
- Abstract IStorage interface for data operations
- In-memory implementation (MemStorage) as default
- Prepared for database integration (Drizzle ORM configured)

**API Design**:
- RESTful routes under `/api` prefix
- Consistent error handling and JSON responses
- Session management ready (connect-pg-simple configured)

### Database Layer

**ORM**: Drizzle ORM with PostgreSQL dialect
- Schema definition in shared directory for type safety
- Zod schema validation integration
- Migration support via drizzle-kit

**Current Schema**:
- Users table with UUID primary keys, username/password fields
- Schema designed for extensibility (appointment bookings, services catalog could be added)

**Database Configuration**:
- Neon serverless PostgreSQL adapter
- Environment-based connection string
- Migration files in `/migrations` directory

**Design Decision**: The application currently uses in-memory storage but has full database infrastructure configured. This allows for rapid prototyping while maintaining a clear path to persistent storage when needed.

### Build and Deployment

**Development**:
- Vite dev server with HMR
- TypeScript type checking
- Source maps for debugging

**Production Build**:
- Frontend: Vite production build to `dist/public`
- Backend: esbuild bundle to `dist/index.js`
- Single Node.js process serves both static files and API

**Configuration Files**:
- TypeScript paths for clean imports (`@/`, `@shared/`, `@assets/`)
- PostCSS with Tailwind and Autoprefixer
- ESLint/Prettier ready (components.json for Shadcn/ui)

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Accessible, unstyled component primitives (accordion, dialog, dropdown, tooltip, etc.)
- **Shadcn/ui**: Pre-built accessible components using Radix UI and Tailwind CSS
- **Embla Carousel**: Touch-enabled carousel component
- **CMDK**: Command menu/palette component
- **Class Variance Authority**: Utility for creating component variants

### Database and ORM
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver
- **Drizzle ORM**: TypeScript ORM with PostgreSQL support
- **connect-pg-simple**: PostgreSQL session store for Express

### Form and Validation
- **React Hook Form**: Performant form state management
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Integrates Zod with React Hook Form

### Utilities
- **date-fns**: Date manipulation library
- **clsx & tailwind-merge**: Conditional CSS class composition
- **React Icons**: Icon library (specifically using Simple Icons for WhatsApp/Instagram)
- **Lucide React**: Icon set for UI elements

### Development Tools
- **Vite**: Frontend build tool and dev server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for backend
- **@replit/vite-plugin-***: Replit-specific development plugins (cartographer, dev banner, runtime error modal)

### Key Integration Points

**WhatsApp Booking**: 
- Direct deep links to WhatsApp with pre-populated messages
- Contact number: +919876543210
- Form data encoded into WhatsApp message format

**No Current External APIs**: The application is designed to work standalone without external API dependencies beyond WhatsApp deep linking.

**Asset Management**:
- Generated images stored in `attached_assets/generated_images/`
- Vite alias (`@assets/`) for clean image imports
- PNG format for photos and UI elements