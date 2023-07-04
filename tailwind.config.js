/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        agakblack: '#F3F3F4',
        grayblack: '#4F4F4F',
        red1: '#FF3733',
        red2: '#9A1212',
        icongray: '#BDBDBD',
      },
      height: {
        690: '690px',
      },
      fontSize: {
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
        26: '26px',
        38: '38px',
        40: '40px',
      },
    },
  },
  plugins: [],
};
