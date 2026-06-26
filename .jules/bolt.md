## 2024-06-07 - Hugo Single-Page Portfolio Image Optimization
**Learning:** This Hugo portfolio renders all sections (Experience, Community, Work) on a single `index.html` page, creating a large initial image payload (logos, project screenshots) that are far below the fold.
**Action:** Always add `loading="lazy"` and `decoding="async"` to images in Hugo partials/sections that are rendered below the fold on single-page templates to prevent network bottlenecks on initial load.

## 2024-06-26 - Double-Slash URL Generation
**Learning:** Using manual string concatenation (`{{ .Site.BaseURL }}{{ .Site.Params.profile_image }}`) in Hugo layouts often causes double-slashes in URLs if both strings contain slashes, resulting in browser cache misses for preloaded assets and negatively impacting initial load performance.
**Action:** Always use the `absURL` or `relURL` pipe (e.g., `{{ .Site.Params.profile_image | absURL }}`) instead of manual concatenation when generating URLs in Hugo layouts.
