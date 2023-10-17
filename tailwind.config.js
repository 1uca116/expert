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

      slate: {
        100: generateColorClass('color-slate-100'),
        200: generateColorClass('color-slate-200'),
        300: generateColorClass('color-slate-300'),
      },
      gray: {
        100: generateColorClass('color-gray-100'),
        200: generateColorClass('color-gray-200'),
        300: generateColorClass('color-gray-300'),
        400: generateColorClass('color-gray-400'),
        500: generateColorClass('color-gray-500'),
        600: generateColorClass('color-gray-600'),
      },
      neutral: {
        50: 'var(--color-neutral-050)',
        100: 'var(--color-neutral-100)',
        200: 'var(--color-neutral-200)',
        'solid-50': generateColorClass('color-neutral-solid-050'),
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
