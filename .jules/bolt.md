## 2024-06-07 - Hugo Single-Page Portfolio Image Optimization
**Learning:** This Hugo portfolio renders all sections (Experience, Community, Work) on a single `index.html` page, creating a large initial image payload (logos, project screenshots) that are far below the fold.
**Action:** Always add `loading="lazy"` and `decoding="async"` to images in Hugo partials/sections that are rendered below the fold on single-page templates to prevent network bottlenecks on initial load.

## 2024-08-01 - Hugo URL Concatenation Cache Misses
**Learning:** Manually concatenating `{{ .Site.BaseURL }}` with a path variable like `{{ .Site.Params.profile_image }}` when the BaseURL ends with a trailing slash (which is strict policy here) generates double slashes (e.g., `https://example.com//Images/profile.png`). This breaks browser caching mechanisms and causes preloaded LCP images to be fetched twice (once by the preload scanner and again when rendering the DOM).
**Action:** In Hugo templates, always use the `absURL` or `relURL` pipe (e.g., `{{ .Site.Params.profile_image | absURL }}`) instead of manual concatenation to ensure correctly formatted URLs and prevent cache misses.
