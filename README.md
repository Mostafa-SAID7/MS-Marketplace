# Market Maestro Folio

A modern, responsive portfolio/dashboard application for trading and market analytics. Built with React, TypeScript, Tailwind CSS, and TanStack Router.

## Features

- 🎨 Modern, responsive design with dark/light theme support
- 📊 Interactive charts and data visualization with Recharts
- 🚀 Fast performance with Vite bundler
- 🎯 Type-safe with TypeScript
- 🌈 Beautiful UI components with Radix UI and Tailwind CSS
- 📱 Mobile-friendly responsive layout
- ♿ Accessible components (WCAG compliant)
- 🔄 Client-side routing with TanStack Router
- 📡 State management with TanStack Query
- 🎭 Smooth animations with Framer Motion
- 🛒 E-commerce-ready with modern hooks

## Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Routing**: TanStack Router
- **State Management**: TanStack Query
- **Forms**: React Hook Form
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Mostafa-SAID7/MS-Marketplace.git
cd market-maestro-folio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Code Quality

```bash
# Lint code
npm run lint

# Format code
npm run format
```

## Project Structure

```
src/
├── components/       # Reusable React components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and helpers
├── routes/          # Page components and route definitions
├── router.tsx       # Router configuration
├── routeTree.gen.ts # Auto-generated route tree
├── main.tsx         # Application entry point
└── styles.css       # Global styles and Tailwind config

public/
├── favicon.svg      # Application favicon

docs/               # Documentation files
├── INSTALLATION.md  # Installation guide
├── DEPLOYMENT.md    # Deployment guide
├── ARCHITECTURE.md  # Architecture documentation
└── CONTRIBUTING.md  # Contributing guidelines
```

## Deployment

### Netlify

The application is configured for Netlify deployment with SPA routing support.

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy

The `netlify.toml` file includes automatic SPA routing configuration.

### Environment Variables

Create a `.env` file in the root directory for environment-specific variables:

```env
VITE_API_URL=https://your-api-endpoint.com
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance

- Optimized bundle size (~615KB gzipped)
- Code splitting for routes
- Lazy loading components
- Image optimization
- CSS minification

## Styling

The application uses:
- **Tailwind CSS v4** for utility-first styling
- **Custom CSS variables** for theming
- **Dark/Light mode support** via CSS custom properties
- **Responsive design** with mobile-first approach
- **Custom scrollbar styling** for better UX

### Theme

Colors are defined as CSS custom properties in `src/styles.css`:
- Primary: Gold accent color
- Background: Dark blue gradient
- Foreground: Light text color
- And more customizable properties

## Contributing

See [CONTRIBUTING.md](docs/CONTRIBUTING.md) for guidelines on how to contribute to this project.

## Documentation

See the [docs](./docs) folder for:
- [Installation Guide](docs/INSTALLATION.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Deployment Guide](docs/DEPLOYMENT.md)
- [Contributing Guidelines](docs/CONTRIBUTING.md)

## License

MIT License - see LICENSE file for details

## Author

Market Maestro - Modern Trading & Analytics Platform

## Support

For support, please open an issue on GitHub.

---

**Built with ❤️ using modern web technologies**
