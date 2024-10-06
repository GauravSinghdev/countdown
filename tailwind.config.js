module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInAndRotate: {
          '0%': { opacity: 0, transform: 'rotate(-360deg)' },
          '100%': { opacity: 1, transform: 'rotate(0)' },
        },
        bgPan: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        fadeInAndRotate: 'fadeInAndRotate 2s ease-in-out',
        bgPanSlow: 'bgPan 8s ease infinite',
      },
    },
  },
  plugins: [],
}
