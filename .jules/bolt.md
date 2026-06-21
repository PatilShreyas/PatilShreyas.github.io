## 2024-06-07 - Hugo Single-Page Portfolio Image Optimization
**Learning:** This Hugo portfolio renders all sections (Experience, Community, Work) on a single `index.html` page, creating a large initial image payload (logos, project screenshots) that are far below the fold.
**Action:** Always add `loading="lazy"` and `decoding="async"` to images in Hugo partials/sections that are rendered below the fold on single-page templates to prevent network bottlenecks on initial load.
## 2024-06-07 - Hugo BaseURL Cache Breaking
**Learning:** Manually concatenating `.Site.BaseURL` with a relative path in Hugo templates can lead to double slashes (`//`) in the generated URL, causing browser cache misses for preloaded assets like the hero profile image.
**Action:** Always use the `absURL` or `relURL` pipe (e.g., `{{ .Site.Params.profile_image | absURL }}`) to properly generate static asset paths and avoid double slashes.
