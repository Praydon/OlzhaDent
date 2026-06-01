/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        olzha: {
          navy: '#3864A8',
          blue: '#4C7DC3',
          sky: '#7FB2E5',
          gold: '#EFB252',
          'gold-light': '#F7E4BD',
          cream: '#F7FAFD',
          bg: '#FAFCFF',
        },
      },
      boxShadow: {
        soft: '0 4px 24px rgba(18, 51, 90, 0.06)',
        card: '0 8px 32px rgba(18, 51, 90, 0.08)',
        glow: '0 12px 40px rgba(26, 92, 168, 0.15)',
        'gold-glow': '0 8px 30px rgba(212, 168, 67, 0.2)',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
