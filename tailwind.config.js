/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Inter', 'sans-serif'],
      },
      colors: {
        black: '#0E0E0E',
        black_60: 'rgba(14, 14, 14, 0.6)',
        black_5: 'rgba(14, 14, 14, 0.05)',
        white: '#ffffff',
        white_60: 'rgba(255, 255, 255, 0.6)',
        white_20: 'rgba(255, 255, 255, 0.2)',
        bg_white: '#F4F4F4',
      },
      fontSize: {
        logo: ['40px', { fontWeight: '1000', fontStyle: 'italic' }],
        h1: ['260px', { fontWeight: '600', fontStyle: 'italic' }],
        h1: ['260px', { fontWeight: '600', fontStyle: 'italic' }],
        h2: ['60px',  { fontWeight: '600', fontStyle: 'italic' }],
        h3: ['40px',  { fontWeight: '600', fontStyle: 'italic' }],
        h4: ['28px',  { fontWeight: '600', fontStyle: 'italic' }],
        h5: ['20px',  { fontWeight: '600', fontStyle: 'italic' }],
        body: ['16px', { fontWeight: '400', fontStyle: 'italic' }],
        caption: ['13px', { fontWeight: '400', fontStyle: 'italic' }],
        bubble: ['18px', { fontWeight: '500', fontStyle: 'italic' }],
      },
    },
  },
  plugins: [],
}
