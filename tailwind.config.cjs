/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#9900F0',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'dark': '#1D1C1C',
      'grey': '#342F2F',
      'dummy': '#474E68',
      'link': '#BFBAFF',
    },
    animation: {
      slidedown: 'slidedown .3s ease-in-out',
      slideup: 'slideup 1s ease-in-out',
      slowfade: 'slowfade 1s ease-in-out',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      underline: 'underline 3s ease-out',
      slideleft: 'slideleft 1s infinite',
      slideright: 'slideright 1s infinite',
    },
    keyframes: {
      slowfade: {
        from: { opacity: 0},
        to: { opacity: 1},
      },
      slidedown: {
        from: { opacity: 0, transform: 'translateY(-100%)' },
        to: { opacity: 1, transform: 'translateY(0)' },
      },
      slideup: {
        from: { opacity: 0, transform: 'translateY(0)' },
        to: { opacity: 1, transform: 'translateY(-50%)' },
      },
      slideleft: {
        from: {transform: 'translateY(0)' },
        to: {transform: 'translateX(-3px)' },
      },
      slideright: {
        from: {transform: 'translateY(0)' },
        to: {transform: 'translateX(3px)' },
      },
      pulse: {
        '0%' : {opacity: 1},
        '50%' : {opacity: 0.5},
        '100%' : {opacity: 1},
      },
      underline: {
        '0%' : {width: "5px"},
        '100%': {width: "100%"},
      }
    },
  },
  plugins: [],
}
