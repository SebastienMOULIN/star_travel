/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        obscure: "url('images/space-g1dc8bff49_1920.png')",
      },
    },
  },
  plugins: [],
};
