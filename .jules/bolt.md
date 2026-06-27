## 2024-06-07 - Hugo Single-Page Portfolio Image Optimization
**Learning:** This Hugo portfolio renders all sections (Experience, Community, Work) on a single `index.html` page, creating a large initial image payload (logos, project screenshots) that are far below the fold.
**Action:** Always add `loading="lazy"` and `decoding="async"` to images in Hugo partials/sections that are rendered below the fold on single-page templates to prevent network bottlenecks on initial load.

## 2026-06-27 - Prevent Double-Slash URL Generation
**Learning:** Manual concatenation of `.Site.BaseURL` with relative paths in Hugo templates often leads to double-slash (`//`) URLs if `baseURL` strictly ends in a slash (as required for canonical URLs). This causes browser cache misses for preloaded assets like profile images.
**Action:** Always use the `absURL` or `relURL` pipe (e.g., `{{ .Site.Params.profile_image | absURL }}`) instead of manual concatenation to ensure correct, normalized URL generation.
