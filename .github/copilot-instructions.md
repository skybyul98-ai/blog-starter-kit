# Copilot Instructions for Blog Starter Kit - "깔끔한 친구들"

## Project Overview
A Next.js 15 TypeScript static blog styled as "깔끔한 친구들" (Clean Friends). Converts Markdown files to HTML posts with a warm, minimalist aesthetic. Posts live in `_posts/` with front matter metadata. The architecture emphasizes build-time static generation with zero runtime dependencies for content fetching.

## Architecture & Data Flow

### Content Pipeline
1. **Source**: Markdown files in `_posts/` with YAML front matter (author, date, coverImage, etc.)
2. **Parse**: `gray-matter` extracts front matter into typed `Post` interface (`src/interfaces/post.ts`)
3. **Convert**: `remark` + `remark-html` transforms markdown content to HTML (`src/lib/markdownToHtml.ts`)
4. **Serve**: Static pages generated at build time via Next.js App Router

### Key Modules
- **`src/lib/api.ts`**: File-system based content API (`getPostSlugs`, `getPostBySlug`, `getAllPosts`) — purely synchronous file reads, no database
- **`src/app/page.tsx`**: Home page with HeroSection, latest posts list, and social links
- **`src/app/about/page.tsx`**: About page with personal story, FAQ section, and contact info
- **`src/app/posts/[slug]/page.tsx`**: Dynamic route; renders single post with converted HTML content + footer with engagement buttons
- **`src/app/_components/`**: Reusable UI components organized by purpose (hero, post-card, social-links, faq-section, etc.)

## Build & Development Commands
- `npm run dev` — Start Next.js dev server with Turbopack (on port 3000)
- `npm run build` — Produce static export in `.next/`
- `npm start` — Run production build

## Design System: "깔끔한 친구들" Aesthetic

### Color Palette
- **Primary**: `#A68572` (warm brown) — used for headings, buttons, and links
- **Accent**: `#F6E9D7` (cream beige) — used for highlights, backgrounds
- **Background**: `#FCFAF8` (ivory white) — main page background
- **Text**: `#2D2D2D` (dark gray) — primary text
- **Text Light**: `#5C5C5C` (lighter gray) — secondary/body text
- **Link Hover**: `#D9A272` (warm tan) — hover state for links and buttons

### Typography
- **Serif Font**: Playfair Display / EB Garamond (H1, H2, H3 — for titles)
- **Sans Font**: Inter / Noto Sans (body text, buttons, UI)
- **Line Height**: 1.75x (relaxed) for comfortable reading
- **Font Sizes**: Custom 5xl-8xl for large headings

### Layout & Spacing
- **8pt Grid System**: All spacing follows multiples of 8px
- **Container Max Width**: `max-w-2xl` (42rem) for content
- **Default Padding**: 24px (px-6 md:px-12)
- **Section Spacing**: 64px vertical (py-16 md:py-24)
- **Philosophy**: Whitespace first, breathing room between elements

### Motion & Interactions
- **Transition Duration**: 250ms (`duration-250`)
- **Easing**: `ease-in-out` (`smooth` timing function)
- **Hover Effects**: Subtle color tone shifts; no abrupt changes
- **Animations**: Fade-in animation for toast messages (300ms)

## Key Patterns & Conventions

### Styling Architecture
- **Tailwind CSS v3**: Primary styling framework with extended theme configuration
- **Custom Color System**: All brand colors defined in `tailwind.config.ts`
- **CSS Modules**: Used for complex isolated styles (`markdown-styles.module.css` for post content)
- **Utility Classes**: Combine Tailwind classes with custom component-level utilities

### Component Structure
- **Server Components by Default**: All components are server-side unless they require `"use client"` (state/events)
- **Client Components**: Only `ThemeSwitcher`, `SocialLinks`, `PostFooter` (for toast notifications)
- **Props Pattern**: Fully typed with TypeScript; destructured in function parameters
- **Reusable Sections**: `HeroSection`, `PostCard`, `FAQSection`, `SocialLinks` — designed for flexibility

### New Components (깔끔한 친구들 specific)
- **`HeroSection`** (`hero-section.tsx`): Welcome greeting + profile + CTA buttons
- **`PostCard`** (`post-card.tsx`): Post title + excerpt + date in list view
- **`FAQSection`** (`faq-section.tsx`): Accordion-style Q&A with details element
- **`SocialLinks`** (`social-links.tsx`): Social icons with tooltips (emoji-based)
- **`PostFooter`** (`post-footer.tsx`): Like/share buttons + auto toast on 90% scroll
- **`Header`**: Fixed sticky navigation with brand name and page links

### Dark Mode Implementation
- **NoFOUCScript**: Injected script in layout to prevent flash of unstyled content by reading localStorage before HTML renders
- **Storage Key**: `"nextjs-blog-starter-theme"` stores "system" | "dark" | "light" preference
- **DOM Updates**: `updateDOM()` function applies dark class to `<html>` root; called on mount and preference change

### Toast Notification System
- **Hook**: `useToast()` manages state for multiple concurrent toasts
- **Trigger**: `PostFooter` auto-triggers "고마워요 :)" message at 90% scroll depth
- **Manual Trigger**: Like/share buttons can trigger custom messages
- **Container**: `ToastContainer` renders fixed-position stack at bottom-right

### Post Front Matter Structure
```yaml
title: "Post Title"
excerpt: "Short description (used in cards and meta)"
coverImage: "/assets/blog/slug/cover.jpg"
date: "2025-01-27"
author:
  name: "Author Name"
  picture: "/assets/blog/authors/slug.jpeg"
ogImage:
  url: "/assets/blog/slug/cover.jpg"
preview: boolean (optional)
```

## File Organization
- `src/app/` — Next.js App Router pages (page.tsx, layout.tsx, about/page.tsx, posts/[slug]/page.tsx)
- `src/app/_components/` — Reusable components (hero-section, post-card, faq-section, social-links, post-footer, header, footer, etc.)
- `src/lib/` — Utilities (api.ts for file reading, markdownToHtml.ts for conversion, toast.tsx for notifications, constants.ts)
- `src/interfaces/` — TypeScript type definitions (post.ts, author.ts)
- `_posts/` — Markdown blog post source files with YAML front matter
- `public/assets/blog/` — Post-specific images organized by slug subdirectory
- `.github/copilot-instructions.md` — This file

## SEO & Performance Optimization

### Metadata & Structured Data
- **Canonical URLs**: Set via `metadataBase` in root layout to prevent duplicate content issues
- **JSON-LD Schema**: BlogPosting schema included in post pages for rich snippets
- **OpenGraph & Twitter Cards**: Full metadata for social media sharing
- **Keywords & Descriptions**: Per-page metadata in `generateMetadata()` functions

### Technical SEO
- **robots.ts**: Auto-generated robots.txt for crawler directives
- **sitemap.ts**: Dynamic sitemap generation from post collection
- **Alternate Links**: Language/region variants support
- **Semantic HTML**: Proper heading hierarchy (H1/H2/H3), article tags, time elements

### Image Optimization
- **Next.js Image Component**: Automatic WebP/AVIF conversion, lazy loading, quality optimization
- **Alt Text**: Descriptive Korean alt text for accessibility and SEO
- **Responsive Images**: Automatic srcset generation
- **Format Support**: AVIF → WebP → JPEG fallback chain

### Performance
- **Static Generation**: 100% static HTML (no server-side rendering)
- **Image Compression**: Quality 85% default, WebP format by default
- **Hydration Prevention**: `useEffect`-based mounting to prevent SSR/client mismatch
- **CSS-in-JS**: Tailwind JIT compilation for minimal bundle size

### Crawlability & Indexing
- **Sitemap**: Includes all posts with lastModified dates and change frequency
- **Robots.txt**: Allows all crawlers except `/admin` and `/private`
- **Metadata Export**: Each page exports proper metadata for preview cards
- **Mobile-Friendly**: Responsive design with proper viewport meta tag

## Important Considerations
- **Static Generation**: All content is fetched at build time. Changes to `_posts/` require rebuilding.
- **No Runtime CMS Fetching**: This is pure file-system based; no external API calls.
- **Path Handling**: Uses `process.cwd()` and `path.join()` for file system paths; assets use relative URLs from `/public/`.
- **TypeScript Strict**: Full type safety expected across interfaces and component props.
- **Emotional Design**: Color, spacing, typography, and copy all work together to feel warm and intentional—like a clean wooden desk by a sunlit window.
- **Accessibility**: Keyboard navigation, semantic HTML, and WCAG AA+ contrast ratios are built-in.
- **Domain Configuration**: Replace `https://yourdomain.com` in `robots.ts`, `sitemap.ts`, `layout.tsx`, and `[slug]/page.tsx` with actual domain before deployment.
