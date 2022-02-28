/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
const colors = require('tailwindcss/colors');
const { screens } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        ...screens,
        '2xl': '1440px',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      syne: ['Syne', 'sans-serif'],
      'neue-machina': ['Neue Machina', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      'custom-black': {
        900: '#0a0c0f',
        800: '#1a1c1f',
        700: '#2a2c2f',
        600: '#3a3c3f',
        500: '#4a4c4f',
        400: '#5a5c5f',
        300: '#6a6c6f',
        200: '#7a7c7f',
        100: '#8a8c8f',
        50: '#9a9c9f',
      },
      'custom-white': {
        900: '#fafcff',
        800: '#eaecef',
        700: '#dadcdf',
        600: '#cacccf',
        500: '#babcbf',
      },
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      neutral: colors.neutral,
      red: colors.red,
      orange: colors.orange,
      pink: colors.pink,
      purple: colors.purple,
      blue: colors.blue,
      cyan: colors.cyan,
      green: colors.green,
      teal: colors.teal,
      black: colors.black,
    },
    textColor: {
      'custom-black': {
        900: '#0a0c0f',
        800: '#1a1c1f',
        700: '#2a2c2f',
        600: '#3a3c3f',
        500: '#4a4c4f',
        400: '#5a5c5f',
        300: '#6a6c6f',
        200: '#7a7c7f',
        100: '#8a8c8f',
        50: '#9a9c9f',
      },
      'custom-white': {
        900: '#fafcff',
        800: '#eaecef',
        700: '#dadcdf',
        600: '#cacccf',
        500: '#babcbf',
      },
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      neutral: colors.neutral,
      red: colors.red,
      orange: colors.orange,
      black: colors.black,
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
