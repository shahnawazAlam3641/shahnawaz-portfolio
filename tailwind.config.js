/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        hard: "0px 5px 0 0 rgba(0, 0, 0, 1)",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        reverseScroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        scroll: "scroll 100s linear infinite",
        reverseScroll: "reverseScroll 5s linear infinite",
      },
    },
  },
  plugins: [],
};
