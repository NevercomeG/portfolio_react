/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      screens: {
        xs: '575px',
        // => @media (min-width: 320px) { ... }

        sm: '576px',
        // => @media (min-width: 640px) { ... }

        md: '898px',

        lg: '1200px',

        xl: '1359px',

        xxl: '1536px',
      },      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
      },

      colors: {
        primary: {
          // Customize it on globals.css :root
          50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
        },
        dark: '#222222',
        green: '#48bf53',
        white: '#ffffff',
        black: '#000000',
        gray: '#888888',
        gray2: '#242B2E',
        gray3: '#1E1F21',
        darkgray: '#1A1C20',
        light_gray: '#ececec',
        red: '#DD0031',
        blue: '#1560BD',
        react: '#61DBFB',
        background: '#303336',
      },
      backgroundImage: (theme) => ({
        'gradient-primary': `linear-gradient(to right, ${theme(
          'colors.green'
        )}, ${theme('colors.black')})`,
        'gradient-primary-2':
          'linear-gradient(140.3deg, rgba(44, 47, 50, 0.99) 15.21%, rgba(28, 29, 30, 0.94) 29.99%, rgba(40, 41, 41, 0.8) 46.43%, rgba(16, 16, 16, 0.71) 64.3%, rgba(25, 25, 26, 0.3) 86.01%)',
      }),
      lineHeight: {
        'extra-loose': '2.5',
        12: '3.3rem',
        1: '1.5rem',
      },
      gridTemplateColumns: {
        2: '1.2fr 1fr',
        1: '1fr 1fr',
        0: '1fr',
      },
      borderRadius: {
        50: '50%',
        xl: '3px',
        '2xl': '13px',
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.263rem',
        '3xl': '1.553rem',
        '3.5xl': '1.853rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '6xl': '4rem',
      },
      scale: {
        '-100': '-1',
      },
      boxShadow: {
        xl: '0px 4px 40px 1px rgb(76 33 33 / 50%)',
        '2xl': '0px 4px 40px 1px rgb(51 68 53 / 30%)',
        '3xl': '0px 4px 40px 1px rgb(63 83 126)',
        '4xl': '2px 4px 40px 1px rgb(0 0 0 / 49%)',
        '5xl': '0px 20px 10px 0px rgb(0 0 0 / 30%)',
        '6xl': '0px 20px 10px 0px rgb(0 0 0 / 489%)',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms', 'tailwind-scrollbar-hide','@tailwindcss/aspect-ratio','@tailwindcss/typography')],
};
