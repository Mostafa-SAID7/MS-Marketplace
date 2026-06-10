# Contributing to Market Maestro Folio

Thank you for your interest in contributing to Market Maestro Folio! We welcome contributions from everyone. This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all participants.

## How to Contribute

### Reporting Bugs

Before creating a bug report, check the issue list to avoid duplicates.

When reporting a bug, include:
- **Clear description** of the problem
- **Steps to reproduce** the behavior
- **Expected behavior**
- **Actual behavior**
- **Screenshots** if applicable
- **Environment details** (OS, browser, Node.js version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:
- **Clear title and description** of the enhancement
- **Step-by-step description** of the suggested enhancement
- **Specific examples** to demonstrate the steps
- **Why this enhancement would be useful**

### Pull Requests

1. **Fork the repository** and create a new branch for your feature/fix
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Follow the code style** and commit conventions
   - Use meaningful commit messages
   - Reference issues in commit messages when applicable
   - Keep commits atomic and well-organized

3. **Make your changes**
   - Write clean, readable code
   - Follow existing code patterns and conventions
   - Add comments for complex logic
   - Ensure your changes don't break existing functionality

4. **Test your changes**
   - Run the linter: `npm run lint`
   - Format code: `npm run format`
   - Test in development: `npm run dev`
   - Test production build: `npm run build && npm run preview`

5. **Commit and push** your changes
   ```bash
   git add .
   git commit -m "type: description of changes"
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Provide a clear description of your changes
   - Link to relevant issues
   - Include screenshots/videos if applicable
   - Ensure all checks pass

## Development Setup

### Prerequisites
- Node.js 18+ or Bun
- npm or yarn

### Installation
```bash
git clone https://github.com/Mostafa-SAID7/MS-Marketplace.git
cd market-maestro-folio
npm install
```

### Development Server
```bash
npm run dev
```

### Build
```bash
npm run build
```

## Code Style Guidelines

- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Use React best practices and hooks

### Naming Conventions

- **Components**: PascalCase (e.g., `UserCard.tsx`)
- **Functions/variables**: camelCase (e.g., `getUserData()`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINT`)
- **Files**: Match component names or use kebab-case for utilities

## Project Structure

- `src/components/` - Reusable UI components
- `src/routes/` - Page components
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions and helpers
- `docs/` - Documentation files

## Commit Message Convention

Use the following format:

```
<type>: <subject>

<body>

<footer>
```

### Types
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Build process, dependencies, etc.

Example:
```
feat: add dark mode toggle to navbar

- Add LangToggle component for theme switching
- Update CSS variables for dark mode
- Persist theme preference to localStorage

Closes #123
```

## Questions?

Feel free to open a discussion or issue if you have questions about contributing.

Thank you for contributing! 🎉
