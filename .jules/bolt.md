## 2024-06-07 - Hugo Single-Page Portfolio Image Optimization
**Learning:** This Hugo portfolio renders all sections (Experience, Community, Work) on a single `index.html` page, creating a large initial image payload (logos, project screenshots) that are far below the fold.
**Action:** Always add `loading="lazy"` and `decoding="async"` to images in Hugo partials/sections that are rendered below the fold on single-page templates to prevent network bottlenecks on initial load.

## 2024-06-19 - Prevent Double-Slash Cache Misses in Hugo Templates
**Learning:** Manually concatenating `{{ .Site.BaseURL }}` with a path in Hugo templates can result in double-slash (`//`) URLs if the `baseURL` configuration already ends with a slash (which is strictly required in this repo). These double slashes cause browsers to interpret the URL as a different asset, leading to cache misses for preloaded assets like images and CSS.
**Action:** Always use Hugo's built-in `absURL` or `relURL` pipes (e.g., `{{ "css/tailwind.css" | absURL }}`) instead of manual string concatenation to ensure properly formatted URLs and optimal caching.
