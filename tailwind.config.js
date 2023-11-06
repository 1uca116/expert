/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,tsx}'],
  theme: {
    colors: {
      white: generateColorClass('color-white'),
      black: generateColorClass('color-black'),
      stone: generateColorClass('color-stone'),
      red: generateColorClass('color-red'),
      pink: generateColorClass('color-pink'),
      lavender: generateColorClass('color-lavender'),
      orange: generateColorClass('color-orange'),
      green: generateColorClass('color-green'),

      neutral: {
        200: generateColorClass('color-neutral-200'),
        300: generateColorClass('color-neutral-300'),
        400: generateColorClass('color-neutral-400'),
        500: generateColorClass('color-neutral-500')
      },
      transparent: 'transparent',
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {
      screens: {
        1400: '1400px',
      },
    },
  },
  plugins: [],
};

function generateColorClass(variable) {
  return ({ opacityValue }) =>
    opacityValue
      ? `rgba(var(--${variable}), ${opacityValue})`
      : `rgb(var(--${variable}))`;
}
