## 2024-06-07 - Hugo Single-Page Portfolio Image Optimization
**Learning:** This Hugo portfolio renders all sections (Experience, Community, Work) on a single `index.html` page, creating a large initial image payload (logos, project screenshots) that are far below the fold.
**Action:** Always add `loading="lazy"` and `decoding="async"` to images in Hugo partials/sections that are rendered below the fold on single-page templates to prevent network bottlenecks on initial load.
## 2024-06-08 - Hugo Double-Slash URL Generation
**Learning:** Concatenating `.Site.BaseURL` with absolute paths starting with a slash (like `/Images/...`) creates double-slash URLs (e.g., `https://example.com//Images/...`). This prevents browser cache matching for preloaded assets, wasting network resources on redundant fetches.
**Action:** In Hugo templates, always use the `absURL` or `relURL` pipe (e.g., `{{ "Images/my-image.png" | absURL }}`) instead of manually concatenating `.Site.BaseURL` with a string or parameter.
