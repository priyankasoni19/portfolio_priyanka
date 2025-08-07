# Overview

This is a modern portfolio website built as a full-stack application featuring a React frontend with Express.js backend. The portfolio showcases a developer's skills, projects, experience, and includes a contact form functionality. The application uses modern web technologies including TypeScript, Tailwind CSS, shadcn/ui components, and Framer Motion for animations.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React 18** with TypeScript for type safety
- **Vite** as the build tool and development server
- **Wouter** for client-side routing (lightweight alternative to React Router)
- **Tailwind CSS** for utility-first styling with custom CSS variables for theming
- **shadcn/ui** component library providing pre-built, accessible UI components
- **Framer Motion** for smooth animations and transitions
- **TanStack Query** for server state management and API calls
- **React Hook Form** with Zod validation for form handling

## Backend Architecture
- **Express.js** server with TypeScript
- **RESTful API** design with endpoints for contact form submission
- **In-memory storage** using a Map-based implementation for development
- **Zod schemas** for request validation shared between client and server
- **Middleware** for request logging and error handling

## Database Design
- **Drizzle ORM** configured for PostgreSQL with Neon database
- **Schema definitions** in shared directory for type safety
- Tables for users and contacts with proper relationships
- **Database migrations** managed through Drizzle Kit

## Styling and Theming
- **Multiple theme variants**: professional, cyberpunk, sunset, and ocean themes
- **CSS custom properties** for dynamic theming
- **Dark/light mode** support through theme provider
- **Responsive design** with mobile-first approach
- **Custom animations** with particle effects and skill progress bars

## Project Structure
- **Monorepo structure** with separate client, server, and shared directories
- **Shared schemas** between frontend and backend for type consistency
- **Path aliases** configured for clean imports (@, @shared, @assets)
- **Component organization** with sections, layout, and UI components

## Development Features
- **Hot module replacement** in development
- **TypeScript** for full type safety across the stack
- **ESLint and Prettier** configuration for code quality
- **Development logging** with formatted timestamps

# External Dependencies

## UI and Styling
- **@radix-ui components** - Headless, accessible UI primitives for dialogs, menus, forms, etc.
- **Tailwind CSS** - Utility-first CSS framework with PostCSS processing
- **Framer Motion** - Animation library for React components
- **Lucide React** - Icon library for consistent iconography
- **class-variance-authority** and **clsx** - Conditional className utilities

## Development Tools
- **Vite** - Build tool and development server
- **TypeScript** - Type checking and compilation
- **ESBuild** - Fast JavaScript bundler for production builds
- **tsx** - TypeScript execution for development server

## Data and API
- **TanStack React Query** - Server state management and caching
- **React Hook Form** - Form state management with validation
- **Zod** - Schema validation for forms and API requests
- **date-fns** - Date manipulation utilities

## Database and Storage
- **Drizzle ORM** - Type-safe database toolkit
- **@neondatabase/serverless** - Neon PostgreSQL database driver
- **connect-pg-simple** - PostgreSQL session store for Express

## Replit Integration
- **@replit/vite-plugin-runtime-error-modal** - Development error overlay
- **@replit/vite-plugin-cartographer** - Replit-specific development tooling