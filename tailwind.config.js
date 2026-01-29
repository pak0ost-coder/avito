module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        surface: {
          DEFAULT: '#18181b',
          alt: '#27272a',
        },
        success: '#22c55e',
        alert: '#ef4444',
        reserved: '#f59e42',
        shipping: '#3b82f6',
      },
      borderRadius: {
        '3xl': '2.5rem',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        '3xl': '32px',
      },
    },
  },
  plugins: [],
};
