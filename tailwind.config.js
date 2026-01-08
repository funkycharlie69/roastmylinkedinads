/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff8eb',
          100: '#fff0d1',
          200: '#ffda8f',
          300: '#ffc75c',
          400: '#f09402',
          500: '#e58700',
          600: '#c97300',
          700: '#a35f00',
          800: '#854d00',
          900: '#6e4100',
          950: '#422700'
        },
        dark: {
          900: '#101211',
          800: '#171918',
          700: '#202221',
          600: '#2e3130',
          500: '#797979',
          400: '#dbdbdb',
          300: '#ebebeb',
          200: '#f7f7f7',
          100: '#ffffff'
        }
      },
      fontFamily: {
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
        heading: ['League Spartan', 'system-ui', 'sans-serif']
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
        'extra-wide': '0.15em'
      },
      lineHeight: {
        'extra-relaxed': '1.75',
        'super-relaxed': '2'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: theme('colors.gray.700'),
            h1: {
              color: theme('colors.gray.900'),
              fontWeight: '700',
              fontFamily: theme('fontFamily.heading').join(', ')
            },
            h2: {
              color: theme('colors.gray.900'),
              fontWeight: '600',
              fontFamily: theme('fontFamily.heading').join(', ')
            },
            h3: {
              color: theme('colors.gray.900'),
              fontWeight: '600',
              fontFamily: theme('fontFamily.heading').join(', ')
            },
            strong: {
              color: theme('colors.gray.900')
            },
            a: {
              color: theme('colors.primary.400'),
              '&:hover': {
                color: theme('colors.primary.500')
              }
            }
          }
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
