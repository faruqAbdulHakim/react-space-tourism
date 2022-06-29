/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    screens: {
      tablet: '768px',
      desktop: '1440px',
    },
    fontFamily: {
      sans: ['Barlow Condensed', 'sans-serif'],
      serif: ['Bellefair', 'serif'],
    },
    fontSize: {
      sm: '14px',
      tiny: '16px',
      base: '18px',
      lg: '28px',
      xl: '32px',
      '2xl': '56px',
      '3xl': '100px',
      '4xl': '150px',
    },
    extend: {
      colors: {
        'dark-blue': '#0B0D17',
        'icy-plains': '#D0D6F9',
      },
    },
  },
  plugins: [],
};
