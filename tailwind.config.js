const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,tsx,ts}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        light: 'rgba(255, 255, 255, 0.9)',
        'z-dark': 'rgb(17, 17, 17)',
        'z-green': '#009739',
        'z-yellow': '#FCE300',
        'z-red': '#EF3340',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
    fontFamily: {
      sans: [
        '"Inter var", sans-serif',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32',
        },
        ...defaultTheme.fontFamily.sans,
      ],
    },
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
