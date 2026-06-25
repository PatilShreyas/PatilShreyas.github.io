## 2024-06-07 - Hugo Single-Page Portfolio Image Optimization
**Learning:** This Hugo portfolio renders all sections (Experience, Community, Work) on a single `index.html` page, creating a large initial image payload (logos, project screenshots) that are far below the fold.
**Action:** Always add `loading="lazy"` and `decoding="async"` to images in Hugo partials/sections that are rendered below the fold on single-page templates to prevent network bottlenecks on initial load.

## 2024-06-25 - Hugo URL Concatenation Cache Misses
**Learning:** Using manual string concatenation with `{{ .Site.BaseURL }}` (e.g. `{{ .Site.BaseURL }}Images/...`) in Hugo templates can lead to double-slash (`//`) URL generation if the `baseURL` setting contains a trailing slash. This double slash causes browser cache misses for preloaded assets like images, fonts, and stylesheets, degrading initial load performance.
**Action:** Always use the `absURL` or `relURL` pipe (e.g., `{{ "path/to/asset" | absURL }}`) instead of manually concatenating `.Site.BaseURL` with a path to ensure correct and normalized URL generation.
