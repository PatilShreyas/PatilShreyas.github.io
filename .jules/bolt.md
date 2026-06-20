## 2024-06-07 - Hugo Single-Page Portfolio Image Optimization
**Learning:** This Hugo portfolio renders all sections (Experience, Community, Work) on a single `index.html` page, creating a large initial image payload (logos, project screenshots) that are far below the fold.
**Action:** Always add `loading="lazy"` and `decoding="async"` to images in Hugo partials/sections that are rendered below the fold on single-page templates to prevent network bottlenecks on initial load.

## 2024-06-20 - Hugo URL Concatenation Cache Misses
**Learning:** Manually concatenating `.Site.BaseURL` with strings (e.g. `{{ .Site.BaseURL }}css/tailwind.css`) in Hugo templates, especially when `baseURL` ends with a trailing slash, creates double-slash (`//`) URLs. This results in browser cache misses for preloaded critical assets like `tailwind.css` and the `profile_image`.
**Action:** In Hugo templates, always use the `absURL` or `relURL` pipe (e.g. `{{ "css/tailwind.css" | absURL }}` or `{{ .Site.Params.profile_image | absURL }}`) to properly normalize URLs and prevent cache-breaking double slashes.
