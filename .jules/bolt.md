## 2024-06-07 - Hugo Single-Page Portfolio Image Optimization
**Learning:** This Hugo portfolio renders all sections (Experience, Community, Work) on a single `index.html` page, creating a large initial image payload (logos, project screenshots) that are far below the fold.
**Action:** Always add `loading="lazy"` and `decoding="async"` to images in Hugo partials/sections that are rendered below the fold on single-page templates to prevent network bottlenecks on initial load.

## 2024-08-01 - Hugo URL Resolution and Asset Preloading
**Learning:** Manual string concatenation of `.Site.BaseURL` with asset paths (e.g., `{{ .Site.BaseURL }}{{ .Site.Params.profile_image }}`) creates double-slash (`//`) URLs in the generated HTML when the BaseURL contains a trailing slash. This breaks browser caching for preloaded assets, leading to performance degradation on subsequent page loads.
**Action:** Always use Hugo's built-in `absURL` or `relURL` pipes (e.g., `{{ .Site.Params.profile_image | absURL }}`) for correct path resolution instead of manual concatenation.
