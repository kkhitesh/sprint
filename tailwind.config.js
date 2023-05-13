/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kalam: ["Kalam", "cursive"],
        baloo: ["Baloo Bhai 2", "cursive"],
        inter: ["Inter", "cursive"],
      },
      backgroundImage: {
        hero: "url('/src/assets/Hero.png')",
        rect: "url('/src/assets/Rect.png')",
      },
    },
  },
  plugins: [],
};
