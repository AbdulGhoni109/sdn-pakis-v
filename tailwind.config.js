/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#EBF2F8',
          100: '#C7DCEE',
          200: '#9FC2E1',
          300: '#77A8D4',
          400: '#4F8EC7',
          500: '#2874BA',
          600: '#1B5FA0',
          700: '#1B4F72', // main primary
          800: '#163F5C',
          900: '#0F2F45',
        },
        accent: {
          50:  '#FEF9EC',
          100: '#FDF0C8',
          200: '#FBE199',
          300: '#F8CF61',
          400: '#F5BD2E',
          500: '#E8A838', // main accent / amber
          600: '#D4921A',
          700: '#B87A10',
          800: '#96620C',
          900: '#7A4F09',
        },
        navy: '#1B4F72',
        amber: '#E8A838',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 12px 0 rgba(27, 79, 114, 0.08)',
        'card-hover': '0 8px 24px 0 rgba(27, 79, 114, 0.16)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
