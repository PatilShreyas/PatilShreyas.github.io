## 2024-06-07 - Hugo Single-Page Portfolio Image Optimization
**Learning:** This Hugo portfolio renders all sections (Experience, Community, Work) on a single `index.html` page, creating a large initial image payload (logos, project screenshots) that are far below the fold.
**Action:** Always add `loading="lazy"` and `decoding="async"` to images in Hugo partials/sections that are rendered below the fold on single-page templates to prevent network bottlenecks on initial load.

## 2026-06-14 - Preload Cache Misses due to Double Slashes
**Learning:** In Hugo, when combining a strict trailing-slash `baseURL` (e.g. `https://shreyaspatil.dev/`) with paths starting with a slash (e.g. `/Images/profile-optimized.webp`), naive string concatenation (`{{ .Site.BaseURL }}{{ .Site.Params.profile_image }}`) results in a double slash (`//`). This double-slash URL forces a cache miss in the browser when the actual `<picture>` tag uses the single-slash URL, completely nullifying the performance benefit of `<link rel="preload">`!
**Action:** Always use the built-in `absURL` pipe (e.g. `{{ .Site.Params.profile_image | absURL }}`) instead of manual string concatenation for asset URLs in Hugo layouts to ensure proper cache hits for preloaded resources.
