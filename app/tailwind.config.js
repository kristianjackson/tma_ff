/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        parchment: "#f5f3ef",
        graphite: "#0b0c10",
        brass: "#f0c674"
      }
    }
  },
  plugins: []
};
