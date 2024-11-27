/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './constants/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './providers/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js
  theme: {
    borderColor: ({ theme }) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.border', 'currentColor'),
    }),
    extend: {
      textColor: {
        primary: '#FFF',
        secondary: 'rgba(255, 255, 255, 0.5)',
        disabled: 'rgba(255, 255, 255, 0.3)',
        active: '#EA4D4D',
        error: '#EC5A7D',
        warning: '#B15600',
        success: '#2FBA90',
      },
      colors: {
        paper: '#FFF',
        border: 'rgba(255, 255, 255, 0.1)',
        'primary-contrastText': '#FFF',
      },
      backgroundColor: {
        main: '#171A20',
        primary: '#EA4D4D',
        paper: '#23252B',
        paperContrast: '#F6F6F6',
        paperDarkContrast: 'rgba(255, 255, 255, 0.1)',
        border: 'rgba(255, 255, 255, 0.1)',
        tag: 'rgba(255, 255, 255, 0.04)',
        hover: 'rgba(255, 255, 255, 0.04)',
        backdrop: 'rgba(0, 0, 0, 0.9)',
        skeleton: 'rgba(25, 26, 27, 0.11)',
        input: '#F0F0F0',
      },
      zIndex: {
        modal: '1300',
      },
      height: {
        17: '4.25rem',
      },
    },
  },
  plugins: [],
};
