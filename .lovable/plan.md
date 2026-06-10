# Premium Marketplace-Specialist Portfolio

A polished, dark-luxury developer portfolio built on the supported stack (TanStack Start + React + Vite + Tailwind v4), faithfully delivering your Next.js spec: gold-accent glassmorphism, Framer Motion animations, theme toggle, Arabic RTL, custom cursor, Lenis smooth scroll, and a validated contact form with success toast.

## Stack mapping (your spec → this platform)
- Next.js App Router → TanStack Start (SSR, file-based routing, per-route SEO `head()`)
- next-themes → small theme provider writing `.dark`/`.light` on `<html>`, persisted to localStorage
- Framer Motion, react-hook-form, zod, lucide-react, sonner, lenis → installed as-is
- Fonts (Plus Jakarta Sans + Tajawal) → loaded via `<link>` in root route head

## Design system
- Dark-first, gold accent `#E8C547`, glassmorphism cards, large bold display type.
- Tokens defined in `src/styles.css` under `:root` (dark) + `.light` override, mapped through `@theme inline` so utilities like `bg-card`, `text-gold` work. Custom utilities: `.glass`, `.glow`, `.text-gradient-gold`, scroll-reveal helpers.
- When you paste your CSS, I replace these tokens verbatim — component classes stay stable.

## Page structure
Single long scrolling page (standard for a portfolio; nav uses smooth-scroll anchor links), with SEO metadata on the index + root route.

```
src/routes/
  __root.tsx        -> html shell, fonts, Toaster, ThemeProvider, CustomCursor, Lenis, SEO defaults
  index.tsx         -> assembles all sections + page-level SEO
src/components/
  layout/Navbar.tsx          (sticky, glass, theme toggle, lang toggle, mobile menu, anchor links)
  layout/Footer.tsx
  sections/Hero.tsx          ("Marketplace Systems Architect & Full-Stack Engineer", CTAs)
  sections/About.tsx         (marketplace/multi-vendor/high-scale summary)
  sections/Skills.tsx        (grouped tags: Frontend, Backend, Marketplace, DevOps, Data)
  sections/Projects.tsx      (filter: All / Multi-Vendor / B2C / B2B / Custom)
  sections/Experience.tsx    (vertical timeline)
  sections/Testimonials.tsx  (client quotes grid/carousel)
  sections/Contact.tsx       (react-hook-form + zod, success toast)
  ui/SectionHeading.tsx, ProjectCard.tsx, SkillGroup.tsx, Reveal.tsx, ThemeToggle.tsx, LangToggle.tsx, CustomCursor.tsx
src/lib/
  data.ts            (projects, skills, experience, testimonials)
  i18n.ts            (EN + AR strings, RTL direction handling)
  theme.tsx          (theme context/provider)
  smooth-scroll.tsx  (Lenis init, reduced-motion aware)
```

## Sections detail
- **Navbar**: sticky glass bar, logo, anchor links (About/Skills/Projects/Experience/Contact), theme toggle (sun/moon), EN/AR toggle, animated mobile drawer.
- **Hero**: oversized headline with gold gradient, subtitle tagline, animated entrance, primary CTA (View Work) + secondary (Contact), subtle background glow/grid.
- **About**: professional summary focused on marketplaces, multi-vendor platforms, high-scale systems; quick stat chips.
- **Skills**: grouped cards with tag pills, hover micro-interactions.
- **Projects**: filter tabs + animated grid. 5 realistic projects: Luxury Fashion Multi-Vendor Marketplace, Electronics Marketplace w/ real-time bidding, Local Services Marketplace (Fiverr+Uber), B2B Wholesale Platform, Subscription Box Marketplace. Each: title, description, tech stack, metrics (GMV/users/perf), live + GitHub placeholder links, hover lift/glow, gradient cover.
- **Experience**: timeline of marketplace/full-stack roles with impact bullets.
- **Testimonials**: client quotes with avatar initials, glass cards.
- **Contact**: name/email/message validated with zod via react-hook-form; submit shows `toast.success`, no backend/storage.
- **Footer**: brief, social placeholders, back-to-top.

## Cross-cutting
- **Animations**: Framer Motion entrance + a reusable `Reveal` wrapper for scroll-triggered reveals; respects `prefers-reduced-motion`.
- **Lenis**: momentum smooth scroll, disabled under reduced motion.
- **Custom cursor**: gold dot + ring follower with hover-grow on interactive elements; disabled on touch devices.
- **Bilingual**: i18n string map; toggling AR sets `dir="rtl"` + `lang="ar"` on `<html>` and switches font to Tajawal; layout mirrors via logical Tailwind classes.
- **SEO**: per-route title/description/OG; semantic HTML, single H1, alt text, responsive viewport.

## Dependencies to add
`framer-motion`, `react-hook-form`, `zod`, `@hookform/resolvers`, `lucide-react`, `sonner` (verify if present), `lenis`.

## Notes / assumptions
- Toast-only contact form (no Cloud) per your choice.
- Baseline design system built now; I'll swap in your exact CSS tokens when you paste them.
- Content is realistic placeholder copy for a marketplace specialist; share real bio/links anytime and I'll update `data.ts`.
