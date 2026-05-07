/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Manrope', 'system-ui', 'sans-serif']
      },
      colors: {
        cream: {
          DEFAULT: '#F4ECDD',
          dark: '#EADFC8'
        },
        ink: {
          DEFAULT: '#1A1612',
          2: '#4A3F33',
          3: '#8B7B69'
        },
        terracotta: {
          DEFAULT: '#B85230',
          dark: '#8E3D22'
        },
        forest: '#3F5641'
      }
    }
  },
  plugins: []
};
