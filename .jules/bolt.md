## 2024-06-07 - Hugo Single-Page Portfolio Image Optimization
**Learning:** This Hugo portfolio renders all sections (Experience, Community, Work) on a single `index.html` page, creating a large initial image payload (logos, project screenshots) that are far below the fold.
**Action:** Always add `loading="lazy"` and `decoding="async"` to images in Hugo partials/sections that are rendered below the fold on single-page templates to prevent network bottlenecks on initial load.
## 2024-06-18 - Hugo URL Construction Cache Invalidation
**Learning:** Using manual string concatenation (`{{ .Site.BaseURL }}path`) in Hugo templates can easily result in double-slash (`//`) URLs because `BaseURL` often contains a trailing slash. This prevents correct URL caching by browsers and CDNs, resulting in cache misses for static assets.
**Action:** Always use Hugo's built-in `absURL` or `relURL` pipes (e.g., `{{ "path" | absURL }}`) which intelligently handle trailing slashes and ensure properly formed URLs, thereby maintaining optimal asset caching behavior.
