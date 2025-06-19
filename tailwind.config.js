module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
};