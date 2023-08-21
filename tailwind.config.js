/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fontPrimary: ['San Francisco Display', 'sans-serif'],
        fontArial: ['Arial', 'sans-serif'],
      },
      colors: {
        primary: '#008345',
        gray92: '#929292',
        gray97: '#979797',
        gray7A: '#7A7A7A',
        grayEE: '#EEEEEE',
        grayC4: '#C4C4C4',
        textPrimary: '#111111',
        textBase: '#000',
        orange: '#F57A21',
        secondary: '#FD4848',
        textDesc: '#444',
      },
      spacing: {
        p10: '10px',
      },
      boxShadow: {
        headerShadow: '4px 2px 15px 0px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
