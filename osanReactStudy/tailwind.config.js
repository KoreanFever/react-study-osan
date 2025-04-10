// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class', // 다크모드 클래스 기반
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
