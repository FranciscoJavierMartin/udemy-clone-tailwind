/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3e4143',
          DEFAULT: '#1c1d1f',
        },
        udemy: {
          light: '#a436f0',
          DEFAULT: '#5624d0',
          dark: '#401b9c',
        },
        accent: '#eceb98',
      },
      maxWidth: {
        '8xl': '84rem',
      },
      fontFamily: {
        heading: ['Noto Serif JP', 'serif'],
        text: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
