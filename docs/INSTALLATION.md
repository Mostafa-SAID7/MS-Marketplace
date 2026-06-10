# Installation Guide

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v18.0.0 or higher ([download](https://nodejs.org/))
- **npm**: v9.0.0 or higher (comes with Node.js)
- **Git**: Latest version ([download](https://git-scm.com/))

Alternatively, you can use:
- **Bun**: v1.0.0+ as a faster Node.js alternative
- **Yarn**: v3.0.0+ as an alternative package manager

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/Mostafa-SAID7/MS-Marketplace.git
cd market-maestro-folio
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using Bun:
```bash
bun install
```

Or using Yarn:
```bash
yarn install
```

### 3. Verify Installation

Check that everything is installed correctly:

```bash
npm --version
node --version
```

## Development Setup

### Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Development Features

- Hot Module Replacement (HMR) for instant updates
- TypeScript type checking
- ESLint for code quality
- Prettier for code formatting

### Available Scripts

```bash
# Development
npm run dev          # Start development server

# Building
npm run build        # Build for production
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier

# Package Management
npm install          # Install dependencies
npm update          # Update dependencies
```

## Troubleshooting

### Node Module Issues

If you encounter issues with node_modules:

```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Port Already in Use

If port 5173 is already in use:

```bash
npm run dev -- --port 3000
```

### Vite Build Issues

Clear the Vite cache:

```bash
rm -rf dist .vite
npm run build
```

### TypeScript Errors

Ensure TypeScript is installed:

```bash
npm install -D typescript
```

## IDE Setup

### Recommended IDEs

1. **VS Code** (recommended)
   - Install extensions:
     - ESLint
     - Prettier
     - TypeScript Vue Plugin
     - Tailwind CSS IntelliSense

2. **WebStorm**
   - Built-in support for React, TypeScript, and Tailwind CSS

3. **Vim/Neovim**
   - See `.vimrc` or Neovim configuration

### VS Code Extensions

Recommended extensions for optimal development:

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "vue.volar",
    "eamodio.gitlens"
  ]
}
```

## Environment Variables

Create a `.env` file in the root directory:

```env
# API Configuration
VITE_API_URL=http://localhost:3000

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_DEBUG_MODE=false
```

Environment variables must be prefixed with `VITE_` to be accessible in the browser.

## Next Steps

- Read the [Architecture Guide](ARCHITECTURE.md)
- Check the [Contributing Guidelines](CONTRIBUTING.md)
- Review the [Deployment Guide](DEPLOYMENT.md)

## Support

If you encounter any issues during installation, please:

1. Check the [Troubleshooting](#troubleshooting) section
2. Search existing [GitHub Issues](https://github.com/Mostafa-SAID7/MS-Marketplace/issues)
3. Create a new issue with detailed information

---

**Happy coding! 🚀**
