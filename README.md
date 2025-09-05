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
- Node.js (for Tailwind CSS)

### Local Development
```bash
# Clone the repository
git clone https://github.com/PatilShreyas/PatilShreyas.github.io.git
cd PatilShreyas.github.io

# Start Hugo development server
hugo server

# Site will be available at http://localhost:1313
```

### Building for Production
```bash
# Build the site
hugo --minify

# Output will be in the 'public/' directory
```

## 🚀 Deployment

### GitHub Actions (Recommended)
The repository includes GitHub Actions workflow for automatic deployment:

[.github/workflows/hugo.yml](.github/workflows/hugo.yml)

### Netlify
Current deployment is on Netlify with automatic builds from the main branch.
Configured in [netlify.toml](netlify.toml).

### Manual Deployment
```bash
# Build the site
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
