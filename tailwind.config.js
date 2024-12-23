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
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        appear: {
          "0%": { opacity: "0", scale: "0.5" },
          "100%": { opacity: "1", scale: "1" },
        },
        moveBlur: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(100px, -100px)" },
        },
      },
      animation: {
        scroll: "scroll 100s linear infinite",
        reverseScroll: "reverseScroll 100s linear infinite",
        appear: "appear 1s ease ",
        moveBlur: "moveBlur 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
