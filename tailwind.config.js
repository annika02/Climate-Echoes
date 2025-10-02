module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // your existing extensions
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"], // force dark theme to match your design
  },
}