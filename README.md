# Shreyas Patil's Portfolio

A modern, minimalist portfolio website built with Hugo, featuring a dark theme and showcasing my work as a Google Developer Expert for Android.

**Live Site:** https://shreyaspatil.dev

[![Netlify Status](https://api.netlify.com/api/v1/badges/6433fffa-3b9a-4e6b-8eee-f0a4a8b86024/deploy-status)](https://app.netlify.com/sites/shreyaspatil/deploys)

## 🚀 Migration to Hugo

This portfolio has been migrated from pure HTML/CSS/JS to Hugo for better content management and maintainability. The new setup includes:

- **Hugo Static Site Generator** for content management
- **Tailwind CSS** for modern, responsive styling
- **Dark theme** with minimalist design
- **Markdown content** for easy updates
- **YAML data files** for structured content
- **Animated elements** and smooth interactions

## 🏗️ Architecture

### Content Structure
- `content/` - Markdown content files
- `data/` - YAML data files for structured content
- `layouts/` - Hugo templates and partials
- `static/` - Static assets (CSS, JS, images)
- `hugo.toml` - Site configuration

### Key Sections
- **About Me** - Personal introduction and background
- **Experience** - Professional work history
- **Community** - Google Developer Expert and community involvement
- **Education** - Academic background
- **Workshops** - Speaking engagements and sessions
- **Work** - Apps/Software and Open Source projects

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
hugo server --buildDrafts

# Site will be available at http://localhost:1313
```

### Building for Production
```bash
# Build the site
hugo --minify

# Output will be in the 'public/' directory
```

## 📝 Content Management

### Updating Content

#### Personal Information
Edit `hugo.toml` to update:
- Site title and description
- Social media links
- Profile information
- CV URL

#### About Section
Edit `data/about.yaml` to update your personal introduction.

#### Experience
Edit `data/experience.yaml` to add/update work experience:
```yaml
- duration: "MM/YYYY - PRESENT"
  position: "Your Position"
  company: "Company Name"
  location: "City, State, Country"
  url: "https://company.com"
  logo: "path/to/logo.png"
```


#### Workshops/Sessions
Edit `data/workshops.yaml` to add new speaking engagements.

#### Work Projects
Edit `data/work.yaml` to update apps and open source projects.

### Adding New Sections
1. Create new data file in `data/` directory
2. Add corresponding section in `layouts/index.html`
3. Update navigation menu in `hugo.toml`

## 🎨 Customization

### Theme Colors
Primary accent color is defined in `hugo.toml` and used throughout the site. To change:
1. Update Tailwind config in `layouts/_default/baseof.html`
2. Modify CSS custom properties in `static/css/custom.css`

### Animations
- AOS (Animate On Scroll) library for scroll animations
- Custom CSS animations for text cycling and hover effects
- JavaScript handles interactive elements

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Responsive navigation with mobile menu
- Optimized for all screen sizes

## 🚀 Deployment

### GitHub Pages
The site can be deployed to GitHub Pages using GitHub Actions:

1. Enable GitHub Pages in repository settings
2. Set up Hugo GitHub Action workflow
3. Push changes to trigger deployment

### Netlify
Current deployment is on Netlify with automatic builds from the main branch.

### Manual Deployment
```bash
# Build the site
hugo --minify

# Deploy the 'public/' directory to your hosting provider
```

## 🔧 Troubleshooting

### Common Issues
1. **YAML Syntax Errors**: Ensure proper indentation and escaping in data files
2. **Missing Images**: Check image paths in `static/` directory
3. **Build Failures**: Run `hugo --buildDrafts` to see detailed error messages

### Development Tips
- Use `hugo server --buildDrafts --disableFastRender` for full rebuilds
- Check browser console for JavaScript errors
- Validate YAML syntax before committing changes

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
