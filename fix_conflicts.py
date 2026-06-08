import re

with open('layouts/index.html', 'r') as f:
    content = f.read()

# Pattern to match the conflict blocks and keep both the comment and the async attribute
content = re.sub(
    r'<<<<<<< HEAD\n\s*<img src="([^"]+)" alt="([^"]+)" loading="lazy" decoding="async" class="([^"]+)">\n=======\n\s*<!-- Performance Optimization: Lazy load image below fold -->\n\s*<img src="([^"]+)" alt="([^"]+)" loading="lazy" class="([^"]+)">\n>>>>>>> 6e9c16e \(chore: save work\)',
    r'<!-- Performance Optimization: Lazy load image below fold -->\n                            <img src="\1" alt="\2" loading="lazy" decoding="async" class="\3">',
    content
)

content = re.sub(
    r'<<<<<<< HEAD\n\s*<img src="\{\{ \.logo \}\}" alt="\{\{ \.company \}\}" loading="lazy" decoding="async" class="w-16 h-16 rounded-lg bg-white">\n=======\n\s*<!-- Performance Optimization: Lazy load image below fold -->\n\s*<img src="\{\{ \.logo \}\}" alt="\{\{ \.company \}\}" loading="lazy" class="w-16 h-16 rounded-lg bg-white">\n>>>>>>> 6e9c16e \(chore: save work\)',
    r'<!-- Performance Optimization: Lazy load image below fold -->\n                            <img src="{{ .logo }}" alt="{{ .company }}" loading="lazy" decoding="async" class="w-16 h-16 rounded-lg bg-white">',
    content
)


with open('layouts/index.html', 'w') as f:
    f.write(content)
