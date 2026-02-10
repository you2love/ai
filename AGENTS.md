# AI Tutorial - Agent Guidelines

This is a static website project for an AI learning platform. No build tools, frameworks, or external dependencies are required.

## Commands

### Viewing the Site
```bash
# Direct file open (double-click index.html)
open index.html

# Local server (Python 3)
python -m http.server 8000

# Local server (Node.js)
npx http-server -p 8000

# Access at http://localhost:8000
```

### No Build/Lint/Test Commands
This is a pure static HTML/CSS/JS site. No compilation, linting, or testing is configured.

## Code Style Guidelines

### HTML
- Use semantic HTML5 tags (`<nav>`, `<section>`, `<header>`, etc.)
- Include `lang="zh-CN"` for Chinese content pages
- Use `viewport` meta tag for responsive design
- External CSS/JS files linked via `<link>` and `<script>` tags
- Keep attributes in consistent order: `class`, `id`, `href/src`, `other attributes`

### CSS
- Use CSS custom properties (`:root`) for colors and design tokens
- Follow mobile-first responsive breakpoints (768px, 480px)
- Use Flexbox and CSS Grid for layouts
- Include smooth transitions and animations (`transition`, `@keyframes`)
- Use BEM-style naming for complex components (`.block__element--modifier`)
- Group related styles: variables, reset, base styles, components, responsive

### JavaScript
- Use ES6+ features: arrow functions, const/let, template literals, destructuring
- Wrap code in `DOMContentLoaded` event listener
- Use vanilla JavaScript - no external libraries or frameworks
- Include utility functions (throttle, debounce) for performance
- Use modern APIs (IntersectionObserver, Clipboard API) with fallbacks
- Add keyboard accessibility and touch device support

### Naming Conventions
- CSS classes: lowercase with hyphens (`.nav-links`, `.tech-card`)
- JavaScript functions: camelCase (`initNavigation`, `copyCode`)
- Constants: UPPER_SNAKE_CASE for configuration values
- File names: lowercase with hyphens (`main.js`, `styles.css`)

### Error Handling
- Use try/catch for async operations and clipboard APIs
- Provide fallback implementations for unsupported features
- Log meaningful error messages to console
- Never expose sensitive information in errors

### Performance
- Use CSS animations over JavaScript animations
- Implement lazy loading for scroll animations (IntersectionObserver)
- Throttle scroll/resize event listeners
- Defer non-critical JavaScript execution

### Accessibility
- Include `tabindex` for interactive cards
- Support keyboard navigation (Enter, Space keys)
- Use semantic HTML elements
- Ensure sufficient color contrast for text

### File Structure
```
ai-tutorial/
├── index.html          # Main entry point
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # All JavaScript
└── README.md           # Documentation
```

### Adding New Features
1. Add HTML structure in appropriate section of `index.html`
2. Add CSS in `css/styles.css` following existing patterns
3. Add JavaScript in `js/main.js` using module pattern
4. Test responsiveness on mobile, tablet, and desktop
5. Verify keyboard navigation works correctly
