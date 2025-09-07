/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./static/js/**/*.js",
    "./data/**/*.yaml",
    "./data/**/*.yml"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#47d3f7',
        secondary: '#47d3f7',
        dark: {
          bg: '#000000',
          card: 'rgba(255, 255, 255, 0.05)',
          text: '#ffffff',
          muted: '#b7b6bb'
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
