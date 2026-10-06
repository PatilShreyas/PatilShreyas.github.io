# Modern Web Standards, Performance & WCAG 2.2 AA Compliance Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Modernize Shreyas Patil's portfolio website to adhere to modern web standards (Baseline 2024–2026 CSS, WCAG 2.2 Level AA accessibility, Core Web Vitals optimization, Modern JS APIs, PWA, and Netlify security headers).

**Architecture:** 
- CSS enhancements via Tailwind CSS source file (`src/input.css`) compiled to `static/css/tailwind.css`.
- Semantic HTML and accessibility improvements across Hugo layouts (`layouts/_default/baseof.html`, `layouts/partials/header.html`, `layouts/index.html`).
- Client-side JavaScript modernized in `static/js/main.js` with `IntersectionObserver`, Page Visibility API, and WAI-ARIA tab & menu controllers.
- Static assets and HTTP headers configured via `static/manifest.webmanifest`, `static/favicon.svg`, and `netlify.toml`.

**Tech Stack:** Hugo, Tailwind CSS v3, Vanilla Modern JavaScript, Netlify.

**Spec:** GitHub Issue [#68](https://github.com/PatilShreyas/PatilShreyas.github.io/issues/68).

## Global Constraints
- Preserve existing theme visual design and colors (primary `#47d3f7`, background `#1b1b1b`).
- Keep all external dependencies minimal; use standard browser APIs without adding npm runtime dependencies.
- Ensure all changes compile cleanly with `npm run build-css` and `npx hugo-extended --minify`.
- Conventional commit messages following global rules.

---

### Task 1: Modern CSS & Typography Baseline Upgrades

**Files:**
- Modify: `src/input.css`
- Output: `static/css/tailwind.css`

**Interfaces:**
- Produces: CSS utility classes and base rules for `color-scheme: dark`, `scrollbar-width`, `scrollbar-color`, `text-wrap: balance`, `text-wrap: pretty`, `content-visibility: auto`, `:target-current`, and accessible focus indicators.

- [ ] **Step 1: Update `src/input.css` with modern CSS standards**
  - Add `:root { color-scheme: dark; }` and `html { scroll-behavior: smooth; scroll-padding-top: 5rem; }`.
  - Add standard `scrollbar-width: thin; scrollbar-color: #47d3f7 #1b1b1b;` to `html`.
  - Wrap legacy `::-webkit-scrollbar` styles in `@supports not (scrollbar-color: auto)`.
  - Add `text-wrap: balance;` to headings (`h1, h2, h3, h4, h5, h6`).
  - Add `text-wrap: pretty;` to `p, li`.
  - Add `.heavy-section-deferred { content-visibility: auto; contain-intrinsic-size: auto 600px; }`.
  - Add native scrollspy styles for `:target-current` and fallback `.\:target-current`.
  - Restore accessible keyboard focus rings (`focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none`).

- [ ] **Step 2: Build CSS and verify output**
  Run: `npm run build-css`
  Expected: Builds `static/css/tailwind.css` without errors.

- [ ] **Step 3: Commit**
  ```bash
  git add src/input.css static/css/tailwind.css
  git commit -m "feat(css): modernize scrollbars, text wrapping, and focus styles"
  ```

---

### Task 2: Accessible Shell, Landmarks & PWA Meta in Base Template

**Files:**
- Create: `static/manifest.webmanifest`
- Create: `static/favicon.svg`
- Modify: `layouts/_default/baseof.html`

**Interfaces:**
- Produces: Semantic `<header>` landmark, accessible skip-to-content bypass link (`#main-content`), `<main id="main-content" tabindex="-1">`, `<meta name="color-scheme" content="dark">`, `<meta name="theme-color" content="#1b1b1b">`, and PWA manifest links.

- [ ] **Step 1: Create `static/manifest.webmanifest`**
  Add JSON manifest defining name, short_name, icons, theme_color, and display mode.

- [ ] **Step 2: Create `static/favicon.svg`**
  Create an SVG icon matching the site's brand.

- [ ] **Step 3: Update `layouts/_default/baseof.html`**
  - Add `<meta name="color-scheme" content="dark">`.
  - Add `<meta name="theme-color" content="#1b1b1b">`.
  - Link `manifest.webmanifest` and `favicon.svg`.
  - Add skip-to-content link: `<a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:px-4 focus:py-2 focus:bg-primary focus:text-black focus:font-bold focus:rounded-md focus:shadow-lg">Skip to content</a>`.
  - Wrap header block in `<header>` landmark.
  - Set `<main id="main-content" tabindex="-1">`.

- [ ] **Step 4: Verify Hugo build**
  Run: `npx hugo-extended --minify`
  Expected: Successful site build.

- [ ] **Step 5: Commit**
  ```bash
  git add static/manifest.webmanifest static/favicon.svg layouts/_default/baseof.html
  git commit -m "feat(a11y): add skip link, header landmark, and pwa meta tags"
  ```

---

### Task 3: Header & Navigation Accessibility

**Files:**
- Modify: `layouts/partials/header.html`

**Interfaces:**
- Consumes: Navigation menus from Hugo config.
- Produces: Accessible mobile menu toggle button with `aria-label`, `aria-expanded="false"`, `aria-controls="mobile-menu"`, `aria-hidden="true"` on decorative icons, and `scroll-target-group: auto` on navigation link containers.

- [ ] **Step 1: Update `layouts/partials/header.html`**
  - Add `aria-label="Toggle navigation menu"`, `aria-expanded="false"`, and `aria-controls="mobile-menu"` to `#mobile-menu-btn`.
  - Add `aria-hidden="true"` to `#menu-icon`.
  - Apply `scroll-target-group: auto` styling / attribute to desktop and mobile nav containers.

- [ ] **Step 2: Verify Hugo build**
  Run: `npx hugo-extended --minify`
  Expected: Successful build.

- [ ] **Step 3: Commit**
  ```bash
  git add layouts/partials/header.html
  git commit -m "feat(nav): add aria controls and scroll-target-group to navigation"
  ```

---

### Task 4: Home Page Optimization, CLS Prevention & WAI-ARIA Tabs

**Files:**
- Modify: `layouts/index.html`

**Interfaces:**
- Consumes: `.Site.Data` records for about, experience, community, education, activities, workshops, work.
- Produces: Instant LCP profile image without artificial opacity delay, explicit image `width`/`height` attributes, `aria-label` for all icon-only links, `aria-hidden="true"` on decorative icons, `rel="noopener noreferrer"` on external links, `min-h-dvh` in hero, `heavy-section-deferred` class on offscreen sections, and WAI-ARIA tab semantics (`role="tablist"`, `role="tab"`, `role="tabpanel"`).

- [ ] **Step 1: Optimize profile image LCP and dimensions**
  - Remove opacity delay and `onload` script; render the `<picture>` and `<img>` directly with `fetchpriority="high"`, `width="256"`, `height="256"`.
  - Change `min-h-screen` on `#home-about-split` to `min-h-dvh`.

- [ ] **Step 2: Add accessible names and labels to social links and headings**
  - Add descriptive `aria-label` to each social link (Email, GitHub, X, LinkedIn, Threads, Play Store, Medium, Blog, Facebook, Instagram).
  - Add `aria-hidden="true"` to all FontAwesome icons inside headings and CV button.
  - Add `rel="noopener noreferrer"` to external `target="_blank"` links.

- [ ] **Step 3: Prevent CLS on content images**
  - Add `width="64"` and `height="64"` to company and community logos.
  - Add `width="400"` and `height="192"` (or matching aspect ratio) to work project card images.

- [ ] **Step 4: Implement WAI-ARIA tabs and deferred sections**
  - Add `role="tablist"` to work tabs container.
  - Add `role="tab"`, `id="tab-apps"`, `aria-controls="apps-content"`, `aria-selected="true"`, `tabindex="0"` to Apps tab button.
  - Add `role="tab"`, `id="tab-opensource"`, `aria-controls="opensource-content"`, `aria-selected="false"`, `tabindex="-1"` to Open Source tab button.
  - Add `role="tabpanel"`, `id="apps-content"`, `aria-labelledby="tab-apps"`, `tabindex="0"` to Apps panel.
  - Add `role="tabpanel"`, `id="opensource-content"`, `aria-labelledby="tab-opensource"`, `tabindex="0"` to Open Source panel.
  - Add `heavy-section-deferred` class to sections `#community`, `#education`, `#activities`, `#workshops`, `#work`.

- [ ] **Step 5: Verify Hugo build**
  Run: `npx hugo-extended --minify`
  Expected: Successful build.

- [ ] **Step 6: Commit**
  ```bash
  git add layouts/index.html
  git commit -m "feat(a11y,perf): optimize lcp image, add aria labels, prevent cls, and implement aria tabs"
  ```

---

### Task 5: Modern JavaScript Refactor (`static/js/main.js`)

**Files:**
- Modify: `static/js/main.js`

**Interfaces:**
- Produces: 
  - `initAnimatedHeadlines()`: Respects `prefers-reduced-motion` and pauses during `visibilitychange` (`document.hidden`).
  - `initMobileMenu()`: Synchronizes `aria-expanded="true/false"`.
  - `initSmoothScrolling()`: Restores hash in URL (`history.pushState` / hash) and moves focus to target section.
  - `initNavbarScrollEffect()`: Uses `IntersectionObserver` on top sentinel instead of main-thread scroll listener.
  - `initScrollspy()`: Synchronizes `:target-current` and `aria-current="true"` across nav links.
  - `initWorkTabs()`: Adds keyboard arrow navigation (Left/Right, Home/End) and updates `aria-selected` / `tabindex`.

- [ ] **Step 1: Refactor `static/js/main.js`**
  Implement the improved functions with modern browser APIs.

- [ ] **Step 2: Test script syntax and build**
  Run: `node -c static/js/main.js && npm run build-css && npx hugo-extended --minify`
  Expected: Exits with code 0.

- [ ] **Step 3: Commit**
  ```bash
  git add static/js/main.js
  git commit -m "refactor(js): add reduced-motion check, intersection observer scrollspy, and keyboard accessible tabs"
  ```

---

### Task 6: Netlify HTTP Security & Caching Headers

**Files:**
- Modify: `netlify.toml`

**Interfaces:**
- Produces: Standard security headers (`Content-Security-Policy`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`) and long-term immutable caching headers for static assets.

- [ ] **Step 1: Update `netlify.toml`**
  Add `[[headers]]` sections for `/*`, `/static/*`, `/Images/*`, `/css/*`, `/js/*`.

- [ ] **Step 2: Verify Netlify config format and Hugo build**
  Run: `npx hugo-extended --minify`
  Expected: Exits with code 0.

- [ ] **Step 3: Commit**
  ```bash
  git add netlify.toml
  git commit -m "feat(security): configure netlify http security and caching headers"
  ```

---

### Task 7: End-to-End Verification & Validation

**Files:**
- Verify: Full built project in `public/`

- [ ] **Step 1: Execute complete build pipeline**
  Run: `npm run build-css && npx hugo-extended --minify`
  Expected: Clean build with 0 errors.

- [ ] **Step 2: Verify generated HTML structure**
  Check `public/index.html` for presence of:
  - `<meta name="color-scheme" content="dark">`
  - `<a href="#main-content"` skip link
  - `<header>` landmark
  - `aria-label` on social icons
  - `role="tablist"` and `role="tabpanel"`
  - `fetchpriority="high"` on profile image with explicit dimensions

- [ ] **Step 3: Final Git status check**
  Run: `git status`
  Expected: Clean working directory on `feat/modern-web-standards`.
