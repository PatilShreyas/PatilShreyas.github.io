## 2024-06-07 - Hugo Single-Page Portfolio Image Optimization
**Learning:** This Hugo portfolio renders all sections (Experience, Community, Work) on a single `index.html` page, creating a large initial image payload (logos, project screenshots) that are far below the fold.
**Action:** Always add `loading="lazy"` and `decoding="async"` to images in Hugo partials/sections that are rendered below the fold on single-page templates to prevent network bottlenecks on initial load.
## 2024-06-08 - Scroll Event Optimization
**Learning:** The `main.js` file previously had a scroll event listener that manipulated the DOM (adding/removing classes and setting inline styles) on every single scroll tick, leading to unnecessary reflows and potential scroll jank.
**Action:** When adding scroll event listeners, especially for elements like sticky navbars, always track state (e.g., `isScrolled`) to ensure DOM mutations only occur when the state actually crosses the desired threshold. Also, use `{ passive: true }` to improve scroll performance.
