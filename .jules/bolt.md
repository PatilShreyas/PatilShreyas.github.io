## 2024-06-07 - Hugo Single-Page Portfolio Image Optimization
**Learning:** This Hugo portfolio renders all sections (Experience, Community, Work) on a single `index.html` page, creating a large initial image payload (logos, project screenshots) that are far below the fold.
**Action:** Always add `loading="lazy"` and `decoding="async"` to images in Hugo partials/sections that are rendered below the fold on single-page templates to prevent network bottlenecks on initial load.

## 2024-06-17 - Hugo BaseURL Concatenation Double-Slash Bug
**Learning:** The project's `baseURL` in both `hugo.toml` and `netlify.toml` ends with a trailing slash. Manually concatenating `{{ .Site.BaseURL }}` with paths like `{{ .Site.Params.profile_image }}` (which starts with a slash) results in double slashes (`//`) in the generated URLs. This double-slash causes the browser to treat preloaded assets and the actual requested assets as different resources, resulting in cache misses and wasted network requests, directly impacting page load performance.
**Action:** Always use Hugo's `absURL` or `relURL` pipe functions (e.g., `{{ .Site.Params.profile_image | absURL }}`) instead of manually concatenating `.Site.BaseURL` with strings.
