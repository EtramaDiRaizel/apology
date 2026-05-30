/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal': '#111111',
        'off-white': '#F5F5F7',
        'muted-gray': '#8E8E93',
        'subtle-accent': '#D4AF37',
      },
      fontFamily: {
        'serif': ['Merriweather', 'Georgia', 'serif'],
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        'tight': '-0.02em',
        'normal': '0em',
        'wide': '0.05em',
        'wider': '0.1em',
      },
      spacing: {
        'safe': 'clamp(1rem, 4vw, 3rem)',
      },
    },
  },
  plugins: [],
}
