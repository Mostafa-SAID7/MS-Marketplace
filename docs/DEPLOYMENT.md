# Deployment Guide

## Overview

Market Maestro Folio is optimized for deployment on Netlify, with support for other platforms like Vercel, GitHub Pages, and traditional servers.

## Netlify Deployment

### Prerequisites

1. GitHub account with the repository pushed
2. Netlify account (sign up at [netlify.com](https://netlify.com))
3. Repository access on GitHub

### Automatic Deployment

#### Step 1: Connect GitHub to Netlify

1. Log in to [Netlify Dashboard](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Select "GitHub"
4. Authorize Netlify to access your GitHub account
5. Select the `MS-Marketplace` repository
6. Click "Deploy site"

#### Step 2: Configure Build Settings

Netlify automatically detects the build configuration from `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Step 3: Deploy

- **Auto-deploy**: Pushes to `main` branch automatically trigger builds
- **Build time**: ~3-5 minutes
- **Deployment**: Automatic after successful build

### Manual Deployment

If you prefer manual deployment:

1. Build locally:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

### Environment Variables

Set environment variables in Netlify Dashboard:

1. Go to Site Settings → Build & Deploy → Environment
2. Click "Edit variables"
3. Add variables (prefixed with `VITE_`):

```env
VITE_API_URL=https://your-api.com
VITE_ENVIRONMENT=production
```

### Preview Deployments

Every pull request automatically gets a preview deployment:

1. Create a pull request on GitHub
2. Netlify creates a preview URL
3. Share for review before merging

## Vercel Deployment

### Setup

1. Sign up at [vercel.com](https://vercel.com)
2. Import the GitHub repository
3. Select the project root
4. Vercel auto-detects Vite configuration

### Build Command

```bash
npm run build
```

### Output Directory

```
dist
```

## GitHub Pages Deployment

### Step 1: Add Base URL

Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/MS-Marketplace/',
  // ...
});
```

### Step 2: Create Deploy Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Step 3: Enable GitHub Pages

1. Go to repository Settings
2. Select "Pages" from sidebar
3. Set source to "Deploy from a branch"
4. Select `gh-pages` branch

## Build Optimization

### Production Build

```bash
npm run build
```

Generates optimized output:
- CSS minification
- JavaScript minification
- Tree shaking (dead code removal)
- Code splitting
- Asset optimization

### Build Output

```
dist/
├── index.html          # Main HTML file
├── assets/
│   ├── index-xxxx.js   # Main JavaScript bundle
│   ├── styles-xxxx.css # Compiled CSS
│   └── images/         # Optimized images
└── favicon.svg         # Icon
```

## Performance Tips

### Before Deployment

1. **Optimize images**: Use WebP format where possible
2. **Minimize bundle size**: Remove unused dependencies
3. **Code splitting**: Use dynamic imports for large components
4. **Lazy load**: Implement route-based code splitting

### After Deployment

1. **Monitor performance**: Use Lighthouse in DevTools
2. **Check analytics**: Set up Google Analytics or similar
3. **Monitor errors**: Set up error tracking (Sentry, etc.)
4. **Performance monitoring**: Use Web Vitals

## Custom Domain

### Netlify

1. Go to Site Settings → Domain management
2. Click "Add custom domain"
3. Enter your domain
4. Follow DNS configuration instructions
5. Set up HTTPS (automatic with Let's Encrypt)

### DNS Configuration

For `example.com`:

**DNS Records**:
```
Type   Name    Value
ALIAS  @       your-site.netlify.app
CNAME  www     your-site.netlify.app
```

## SSL/HTTPS

### Netlify

- Automatically enabled with Let's Encrypt
- Auto-renewal
- HSTS headers automatically added

### Custom Certificates

If needed, upload custom SSL certificates in Site Settings.

## Continuous Integration/Deployment (CI/CD)

### GitHub Actions

Monitor deployments and builds:

1. Go to repository → Actions tab
2. View build logs and deployment status
3. Configure secrets for sensitive data

### Environment-Specific Deployments

Create multiple deployment branches:

```bash
# Development
git checkout -b develop

# Staging
git checkout -b staging

# Production (main)
git checkout main
```

Configure webhooks in Netlify for each branch.

## Monitoring & Analytics

### Netlify Analytics

1. Enable in Site Settings
2. View traffic and performance metrics
3. Monitor build times

### Web Vitals

Monitor Core Web Vitals:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)

### Error Tracking

Integrate Sentry:

1. Create Sentry project
2. Install SDK:
   ```bash
   npm install @sentry/react
   ```
3. Initialize in `main.tsx`

## Rollback & Version Control

### Rollback Deployment

**Netlify**:
1. Go to Deploys tab
2. Select previous deployment
3. Click "Restore"

**Git**:
```bash
git revert HEAD
git push
```

### Version Tagging

```bash
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

## Troubleshooting

### Build Fails

Check build logs in Netlify/Vercel dashboard:

1. Click failed deployment
2. Review error messages
3. Fix and push new commit

Common issues:
- Missing dependencies: `npm install`
- TypeScript errors: Check `npm run lint`
- Environment variables not set

### Site Shows 404

Ensure `netlify.toml` has SPA redirect:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Performance Issues

1. Analyze bundle: `npm run build -- --report`
2. Remove unused dependencies
3. Implement code splitting
4. Optimize images

## Deployment Checklist

- [ ] All tests passing
- [ ] No console errors
- [ ] Environment variables configured
- [ ] Build completes successfully
- [ ] Production build tested locally
- [ ] README updated
- [ ] CHANGELOG updated
- [ ] Custom domain configured (if applicable)
- [ ] SSL/HTTPS enabled
- [ ] Analytics configured
- [ ] Monitoring tools set up
- [ ] Team notified of deployment

## Post-Deployment

1. **Test thoroughly**: Test all features on production
2. **Monitor**: Watch error logs for the first 24 hours
3. **Collect feedback**: Ask users for feedback
4. **Plan improvements**: Document issues for next release

## Support

- [Netlify Docs](https://docs.netlify.com/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Vercel Deployment](https://vercel.com/docs)

---

Happy deploying! 🚀
