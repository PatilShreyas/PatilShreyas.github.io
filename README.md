# Shreyas Patil's Portfolio

A modern, minimalist portfolio website built with Hugo.

**Live Site:** https://shreyaspatil.dev

[![Netlify Status](https://api.netlify.com/api/v1/badges/6433fffa-3b9a-4e6b-8eee-f0a4a8b86024/deploy-status)](https://app.netlify.com/sites/shreyaspatil/deploys)

## ✨ Features

- **🚀 Hugo Static Site Generator** - Fast, modern static site generation
- **🎨 Tailwind CSS** - Utility-first CSS framework for responsive design
- **📝 YAML Data Management** - Structured content in data files
- **📱 Mobile Responsive** - Optimized for all screen sizes

## 🛠️ Development

### Prerequisites
- [Hugo Extended](https://gohugo.io/installation/) (v0.148.2 or later)
- [Node.js](https://nodejs.org/) (v16 or later)
- npm (comes with Node.js)

### Local Development Setup
```bash
# Clone the repository
git clone https://github.com/PatilShreyas/PatilShreyas.github.io.git
cd PatilShreyas.github.io

# Install dependencies
npm install

# Build optimized CSS (required for first run)
npm run build-css

# Start Hugo development server
hugo server

# Site will be available at http://localhost:1313
```

### Development Workflow
```bash
# Watch for CSS changes during development (optional)
npm run watch-css

# Build optimized CSS after making Tailwind changes
npm run build-css

# Start Hugo server for live reload
hugo server
```

### Available npm Scripts
```bash
npm run build-css    # Build optimized Tailwind CSS
npm run watch-css    # Watch for changes and rebuild CSS
npm run build        # Build both CSS and Hugo site
```

### CSS Development
- **Source:** `src/input.css` (Tailwind directives and custom CSS)
- **Output:** `static/css/tailwind.css` (generated, do not edit)
- **Config:** `tailwind.config.js` (Tailwind configuration)

### Building for Production
```bash
# Build optimized CSS and Hugo site
npm run build

# Or build separately
npm run build-css
hugo --minify

# Output will be in the 'public/' directory
```

## 🚀 Deployment

Both deployment platforms are configured to automatically build optimized CSS during deployment.

### GitHub Actions (Recommended)
The repository includes GitHub Actions workflow for automatic deployment with optimized builds:

[.github/workflows/deploy-to-pages.yml](.github/workflows/deploy-to-pages.yml)

### Netlify
Current deployment is on Netlify with automatic builds from the main branch.
Configured in [netlify.toml](netlify.toml).

### Manual Deployment
```bash
# Build optimized site
npm run build

# Or build step by step
npm run build-css
hugo --minify

# Deploy the 'public/' directory to your hosting provider
```

---
***Feel free to clone and modify repo as you want, but don't forget to add reference to the authors 😊***

---

## Licence
```
   Copyright 2019 Shreyas Patil

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
```
