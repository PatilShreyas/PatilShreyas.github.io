## 2024-06-07 - Hugo Single-Page Portfolio Image Optimization
**Learning:** This Hugo portfolio renders all sections (Experience, Community, Work) on a single `index.html` page, creating a large initial image payload (logos, project screenshots) that are far below the fold.
**Action:** Always add `loading="lazy"` and `decoding="async"` to images in Hugo partials/sections that are rendered below the fold on single-page templates to prevent network bottlenecks on initial load.
## 2026-06-24 - Hugo BaseURL Concatenation Cache Miss Anti-pattern
**Learning:** Manually concatenating `.Site.BaseURL` with paths in Hugo templates (e.g., `{{ .Site.BaseURL }}Images/...`) creates URLs with double slashes (e.g., `https://domain.com//Images/...`) if the `baseURL` configuration has a trailing slash. This prevents browsers from correctly matching preloaded resources with their requested URLs later, causing cache misses and redundant network requests.
**Action:** Always use the `absURL` or `relURL` pipes (e.g., `{{ "Images/profile.png" | absURL }}`) for asset links in Hugo instead of manual concatenation.
