## 2024-06-07 - Hugo Single-Page Portfolio Image Optimization
**Learning:** This Hugo portfolio renders all sections (Experience, Community, Work) on a single `index.html` page, creating a large initial image payload (logos, project screenshots) that are far below the fold.
**Action:** Always add `loading="lazy"` and `decoding="async"` to images in Hugo partials/sections that are rendered below the fold on single-page templates to prevent network bottlenecks on initial load.

## 2024-06-09 - Scroll Performance & Animated Text Layout Thrashing
**Learning:** The single-page architecture means users spend most of their time scrolled down reading experience or work items. The animated headline text at the top was continuously running its DOM updates (`opacity` and `transform` changes) every 3 seconds even when entirely out of view. Furthermore, a scroll listener was firing layout recalculations (`transform: translateY(0)`) on the sticky navbar every scroll tick.
**Action:** When implementing continuous animations on landing page heroes, utilize `IntersectionObserver` to pause the animation loop while out of viewport. Always mark scroll event listeners with `{ passive: true }` and remove redundant DOM write operations that are already handled by CSS.
