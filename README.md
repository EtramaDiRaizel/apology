# An Archive of Us

A premium editorial slideshow consuming WhatsApp chat data. Built with React, Tailwind CSS, and Framer Motion.

## Overview

This project transforms quantitative chat data into an elegant, interactive narrative experience. Five carefully designed slides guide viewers through:

1. **Cinematic Title**: "An Archive of Us" — understated, contemplative intro
2. **Quantitative Overview**: Total messages, contribution breakdown
3. **Keyword Contrast**: Comparative analysis of affection-laden phrases
4. **Nighttime Patterns**: "Goodnight" and "baby" frequency analysis
5. **The Apology**: Full-screen typographical statement

## Design Philosophy

- **Editorial Minimalism**: Strict color palette (charcoal #111111, off-white #F5F5F7, muted gold accents)
- **Sophisticated Typography**: Serif headlines, generous letter-spacing, precise hierarchy
- **Fluid Motion**: Subtle Framer Motion transitions instead of jarring cuts
- **Meaningful Whitespace**: Breathing room; data doesn't dominate the canvas
- **Elegant Navigation**: Subtle progress indicators, keyboard/scroll support

## Project Structure

```
├── src/
│   ├── slides/
│   │   ├── Slide1Title.jsx        # Cinematic intro
│   │   ├── Slide2Overview.jsx     # Quantitative metrics
│   │   ├── Slide3Keywords.jsx     # Affection language contrast
│   │   ├── Slide4Nighttime.jsx    # Behavioral patterns
│   │   └── Slide5Apology.jsx      # Typographical statement
│   ├── App.jsx                     # Main slideshow controller
│   ├── main.jsx                    # React root
│   └── index.css                   # Tailwind styles + custom CSS
├── wrapped_data.json               # Source data from WhatsApp parser
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── index.html
```

## Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Steps

1. **Navigate to project directory**
   ```bash
   cd /path/to/project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Ensure data file exists**
   - Place `wrapped_data.json` in the root directory
   - Verify the JSON structure matches output from `parse_whatsapp.py`

4. **Start development server**
   ```bash
   npm run dev
   ```
   - Opens automatically at `http://localhost:5173`
   - Hot reload enabled for all changes

5. **Build for production**
   ```bash
   npm run build
   ```
   - Creates optimized `dist/` folder
   - Ready for deployment to Vercel, Netlify, etc.

## Navigation

**Keyboard Controls:**
- `↑` / `←` — Previous slide
- `↓` / `→` / `Space` — Next slide

**Mouse/Trackpad:**
- Scroll up/down to navigate
- Click arrows for manual navigation

**Visual Indicators:**
- Progress line at bottom fills with each slide
- Slide counter in bottom-right corner
- Subtle keyboard hint in top-left

## Customization

### Colors
Edit `tailwind.config.js`:
```js
colors: {
  'charcoal': '#111111',
  'off-white': '#F5F5F7',
  'muted-gray': '#8E8E93',
  'subtle-accent': '#D4AF37',
}
```

### Typography
- **Serif**: Merriweather (headlines, impact)
- **Sans**: Inter (body, captions)
- Modify in `tailwind.config.js` `fontFamily` and Google Fonts import

### Animation Timing
Adjust `duration`, `delay`, and `ease` parameters in component variants:
```jsx
transition={{ duration: 0.6, ease: 'easeOut' }}
```

### Slide Content
Each slide is independently editable:
- `Slide1Title.jsx` — Update title/tagline
- `Slide2Overview.jsx` — Modify supporting text
- `Slide3Keywords.jsx` — Adjust insights/messaging
- `Slide4Nighttime.jsx` — Edit analysis language
- `Slide5Apology.jsx` — Update apology paragraphs

## Data Integration

The slideshow consumes `wrapped_data.json` with this structure:
```json
{
  "metadata": {
    "total_messages": 78196,
    "participants": ["ikram", "twincess 🫶🏼"]
  },
  "message_counts": {
    "ikram": 41438,
    "twincess 🫶🏼": 36758
  },
  "keyword_statistics": {
    "iloveyou": { "counts": {...}, "breakdown": {...}, "dates": {...} },
    ...
  },
  "longest_messages_by_me": {
    "messages": [...]
  }
}
```

For new data: Re-run `parse_whatsapp.py`, replace `wrapped_data.json`, rebuild.

## Performance

- **Vite**: Fast HMR, optimized builds
- **Code Splitting**: Each slide lazy-loads seamlessly
- **Motion**: GPU-accelerated with Framer Motion
- **Bundle Size**: ~180KB (uncompressed), ~45KB (gzipped)

## Browser Support

- Chrome 90+
- Safari 14+
- Firefox 88+
- Edge 90+

*Requires ES2020+ support for optional chaining, nullish coalescing.*

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag dist/ folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Push dist/ to gh-pages branch
```

## Browser Dev Tools

**React DevTools**: Install browser extension to inspect component hierarchy  
**Framer Motion**: All animations are interactive; adjust timing in real-time

## License

Private project. All rights reserved.

---

**Built with** React 18, Tailwind CSS 3, Framer Motion 10, Vite 4
