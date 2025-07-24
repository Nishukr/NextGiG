import animate from 'tailwindcss-animate'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [animate],
}

// tailwind.config.js
module.exports = {
  content: [
    // your paths
  ],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        slideInLeft: "slideInLeft 1s ease-out 1 forwards",
      },
    },
  },
  plugins: [],
};

