/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true
      },
      fontFamily: {
        heading: ['Open-Sans', 'sans-serif'],
        body: ['Roboto', 'sans-serif']
      },
      colors: {
        primary: '#2C3CCC',
        background: {
          DEFAULT: '#F6F6F6',
          dark: '#040614'
        },
        offWhite: '#E5E5E5',
        lightBlack: '#D9D9D9',
        twitter: {
          blue: '#1DA1F2',
          white: '#f5f8fa'
        },
        github: {
          white: '#fafafa',
          dark: '#333'
        }
      },
      inset: {
        '1/2': '50%'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
