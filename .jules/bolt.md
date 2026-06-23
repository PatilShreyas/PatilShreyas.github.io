## 2024-06-07 - Hugo Single-Page Portfolio Image Optimization
**Learning:** This Hugo portfolio renders all sections (Experience, Community, Work) on a single `index.html` page, creating a large initial image payload (logos, project screenshots) that are far below the fold.
**Action:** Always add `loading="lazy"` and `decoding="async"` to images in Hugo partials/sections that are rendered below the fold on single-page templates to prevent network bottlenecks on initial load.

## 2024-06-23 - Prevent Cache Misses with Double-Slash URLs
**Learning:** Manually concatenating `{{ .Site.BaseURL }}` with an asset path (e.g. `{{ .Site.BaseURL }}Images/profile-optimized.png`) leads to double slashes in the rendered URLs because Netlify/Hugo `baseURL` strictly ends in a slash. This causes browser cache misses for preloaded assets, drastically increasing redundant network load.
**Action:** In Hugo templates, ALWAYS use the `absURL` or `relURL` pipe (e.g., `{{ "css/tailwind.css" | absURL }}`) instead of manually concatenating `.Site.BaseURL` with a path.
