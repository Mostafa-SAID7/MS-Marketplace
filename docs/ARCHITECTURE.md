# Architecture Guide

## Overview

Market Maestro Folio is built with a modern, scalable architecture using React, TypeScript, and Vite. This guide explains the project structure and design decisions.

## Project Structure

```
market-maestro-folio/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── ui/             # Base UI components (buttons, cards, etc)
│   │   ├── portfolio/      # Portfolio-specific components
│   │   └── common/         # Shared/common components
│   │
│   ├── routes/             # Page components and route definitions
│   │   ├── __root.tsx      # Root layout component
│   │   ├── index.tsx       # Home page
│   │   └── [other routes]  # Additional pages
│   │
│   ├── hooks/              # Custom React hooks
│   │   └── useTheme.ts     # Theme management hook
│   │
│   ├── lib/                # Utility functions and helpers
│   │   ├── utils/          # General utilities
│   │   ├── error-page.ts   # Error page renderer
│   │   └── error-capture.ts # Error capturing
│   │
│   ├── router.tsx          # Router configuration
│   ├── routeTree.gen.ts    # Auto-generated route tree
│   ├── main.tsx            # Application entry point
│   └── styles.css          # Global styles & theme
│
├── public/
│   └── favicon.svg         # Application icon
│
├── docs/                   # Documentation
│   ├── INSTALLATION.md     # Installation guide
│   ├── ARCHITECTURE.md     # This file
│   ├── DEPLOYMENT.md       # Deployment guide
│   └── CONTRIBUTING.md     # Contributing guidelines
│
├── index.html              # HTML entry point
├── package.json            # Project dependencies
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── netlify.toml            # Netlify deployment config
```

## Technology Stack

### Core Framework
- **React 19**: UI library with latest features
- **TypeScript**: Type-safe development
- **Vite**: Next-generation build tool

### Routing & State
- **TanStack Router**: File-based routing system
- **TanStack Query**: Server state management
- **React Query**: Data fetching and caching

### Styling
- **Tailwind CSS v4**: Utility-first CSS framework
- **CSS Custom Properties**: Theme variables
- **Custom Animations**: Framer Motion

### UI Components
- **Radix UI**: Unstyled accessible components
- **Lucide React**: Icon library
- **Embla Carousel**: Image carousel

### Forms & Validation
- **React Hook Form**: Performant forms
- **Zod**: TypeScript-first schema validation

### Utilities
- **Framer Motion**: Animation library
- **Date-fns**: Date utilities
- **Lenis**: Smooth scrolling
- **Sonner**: Toast notifications

## Architecture Patterns

### 1. Component Structure

#### Functional Components
All components are functional with React Hooks:
```typescript
export function ComponentName() {
  return <div>Content</div>;
}
```

#### Props Pattern
Components accept props with TypeScript interfaces:
```typescript
interface ComponentProps {
  title: string;
  onClick: () => void;
}
```

### 2. Routing Architecture

Uses TanStack Router with file-based routing:
- Routes defined in `src/routes/` directory
- Automatic route tree generation (`routeTree.gen.ts`)
- Type-safe navigation with route validation

### 3. State Management

**Server State**: TanStack Query
- Data fetching and caching
- Background synchronization
- Automatic refetching

**Client State**: React hooks
- Local component state with `useState`
- Theme state with custom hooks
- Form state with React Hook Form

### 4. Styling Strategy

**Layered CSS**:
```css
@layer base {
  /* Reset and base styles */
}

@layer components {
  /* Reusable component classes */
}

@layer utilities {
  /* Custom utility classes */
}
```

**Theme System**:
- CSS custom properties for theming
- Dark/light mode support
- Color palette management

## Data Flow

```
User Action
    ↓
Component Event Handler
    ↓
State Update / Server Request
    ↓
TanStack Query (if server data)
    ↓
Component Re-render
    ↓
UI Update
```

## Performance Optimization

### Code Splitting
- Route-based code splitting
- Automatic with Vite

### Image Optimization
- Lazy loading with `loading="lazy"`
- Responsive images with `srcset`

### CSS Optimization
- Purged unused CSS with Tailwind
- Minified in production build

### Component Optimization
- React.memo for expensive components
- useCallback for event handlers
- useMemo for computed values

## Error Handling

### Global Error Boundaries
- Root error component in `__root.tsx`
- Custom error page rendering
- Error logging in development

### Type Safety
- TypeScript strict mode enabled
- Zod for runtime validation
- React Hook Form for form validation

## Build Process

### Development
```bash
npm run dev
```
- Starts Vite dev server
- HMR enabled for instant updates
- Source maps for debugging

### Production
```bash
npm run build
```
1. TypeScript compilation
2. React optimization
3. CSS processing with Tailwind
4. Code minification
5. Output to `dist/` folder

## Configuration Files

### `vite.config.ts`
- Build tool configuration
- Plugin setup (React, Tailwind, TypeScript paths)
- Output directory settings

### `tsconfig.json`
- TypeScript compiler options
- Path aliases (`@/*` → `src/*`)
- Strict mode enabled

### `tailwind.config.ts`
- Tailwind CSS configuration
- Custom theme extensions
- Content paths for purging

### `netlify.toml`
- Build command: `npm run build`
- Publish directory: `dist`
- SPA routing redirects

## Development Workflow

1. **Create Component**
   ```typescript
   // src/components/MyComponent.tsx
   export function MyComponent() { ... }
   ```

2. **Add Route**
   ```typescript
   // src/routes/my-page.tsx
   export const Route = createFileRoute('/my-page')({
     component: MyPageComponent
   });
   ```

3. **Use in App**
   ```typescript
   // Automatically available in router
   ```

4. **Test Locally**
   ```bash
   npm run dev
   ```

5. **Build & Deploy**
   ```bash
   npm run build
   ```

## Security Considerations

- Content Security Policy headers (configured in netlify.toml)
- XSS protection with React's built-in escaping
- CSRF protection for forms
- Input validation with Zod
- Environment variables for sensitive data

## Accessibility (A11y)

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast ratios
- Focus management
- Screen reader testing

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Improvements

- [ ] Internationalization (i18n)
- [ ] Progressive Web App (PWA)
- [ ] Service Worker caching
- [ ] Dark mode persistence
- [ ] Analytics integration
- [ ] Performance monitoring
- [ ] Error tracking
- [ ] A/B testing framework

---

For more details, see [DEPLOYMENT.md](DEPLOYMENT.md) and [CONTRIBUTING.md](CONTRIBUTING.md).
