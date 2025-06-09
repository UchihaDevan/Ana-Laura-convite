/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
      },
    },
  },

  plugins: [],
}
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        luckiest: ['Luckiest Guy', 'cursive'],
      },
      colors: {
        'primary-light': '#FFFAE5',
        'primary-main':  '#FFD54F',
        'primary-dark':  '#BF360C',
        'secondary-main':'#FF7043',
        'accent-light':  '#E1F5FE',
        'accent-dark':   '#01579B',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
}

module.exports = config
