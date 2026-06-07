## 2024-06-07 - Hugo Single-Page Portfolio Image Optimization
**Learning:** This Hugo portfolio renders all sections (Experience, Community, Work) on a single `index.html` page, creating a large initial image payload (logos, project screenshots) that are far below the fold.
**Action:** Always add `loading="lazy"` and `decoding="async"` to images in Hugo partials/sections that are rendered below the fold on single-page templates to prevent network bottlenecks on initial load.
