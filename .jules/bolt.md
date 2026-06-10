## 2024-06-07 - Hugo Single-Page Portfolio Image Optimization
**Learning:** This Hugo portfolio renders all sections (Experience, Community, Work) on a single `index.html` page, creating a large initial image payload (logos, project screenshots) that are far below the fold.
**Action:** Always add `loading="lazy"` and `decoding="async"` to images in Hugo partials/sections that are rendered below the fold on single-page templates to prevent network bottlenecks on initial load.
## 2024-06-10 - JavaScript DOM Mutatation on Scroll and Hidden Elements
**Learning:** This codebase had continuous `setInterval` DOM animations for headlines running even when scrolled out of view, and the scroll listener was forcing layout reflow on every scroll frame by reapplying identical states (`translateY(0)` and `classList`).
**Action:** Always use `IntersectionObserver` to pause recurring DOM animations when elements are off-screen. Cache DOM state in scroll listeners and only apply changes when the state transitions.
