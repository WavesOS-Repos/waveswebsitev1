# Overview

WavesOS is a modern Linux distribution website built as a full-stack application showcasing a futuristic Arch-based operating system. The project features a sleek, cyberpunk-themed landing page with download functionality, system requirements, installation guides, and contact information. It's designed to present WavesOS as a next-generation computing platform with emphasis on performance, security, and developer-focused features.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with custom cyberpunk theme variables and Shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and API calls
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Components**: Radix UI primitives with custom styling for accessibility and consistency

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful endpoints for download tracking and statistics
- **File Serving**: Express static file serving with Vite integration for development
- **Storage**: In-memory storage implementation with interface for future database integration
- **Development**: Hot module replacement and middleware integration

## Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL with schema definitions
- **Database**: PostgreSQL (configured but using in-memory storage currently)
- **Schema**: Download tracking with file statistics (filename, download count, file type)
- **Migrations**: Drizzle Kit for database schema management and migrations

## Styling and Theming
- **Design System**: Dark cyberpunk theme with custom CSS variables
- **Typography**: Multiple font families (Orbitron, Inter, Geist Mono) for different content types
- **Color Palette**: Muted cyber colors (red, blue, green, purple, cyan, orange) for visual hierarchy
- **Animations**: Custom CSS animations for floating elements and particle effects
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities

## Development and Build
- **Development Server**: Vite with React plugin and runtime error overlay
- **TypeScript**: Strict configuration with path mapping for clean imports
- **Linting**: ESNext modules with bundler resolution for modern JavaScript
- **Build Process**: Separate client and server builds with esbuild for server bundling
- **Asset Management**: Vite asset handling with alias resolution for components and utilities

# External Dependencies

## UI and Styling
- **Radix UI**: Complete set of unstyled, accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Class Variance Authority**: For component variant management
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets (specifically SiReddit for social links)

## Data and API
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling with validation
- **Hookform Resolvers**: Form validation integration
- **Zod**: Runtime type validation and schema validation
- **Date-fns**: Date manipulation and formatting utilities

## Database and ORM
- **Drizzle ORM**: Type-safe SQL ORM with PostgreSQL support
- **Drizzle Zod**: Integration between Drizzle and Zod for schema validation
- **Neon Database**: Serverless PostgreSQL database service
- **Connect PG Simple**: PostgreSQL session store for Express

## Development Tools
- **Vite Plugins**: React support, runtime error modal, and development cartographer
- **TSX**: TypeScript execution for development server
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

## Routing and Navigation
- **Wouter**: Lightweight React router for client-side navigation
- **React Router Alternative**: Chosen for minimal bundle size and simplicity

## Utilities and Helpers
- **clsx**: Utility for constructing className strings conditionally
- **Tailwind Merge**: Merging Tailwind CSS classes intelligently
- **Nanoid**: Unique ID generation for components and data
- **CMDK**: Command palette component for enhanced user experience