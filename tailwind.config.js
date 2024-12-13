/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        hard: "0px 5px 0 0 rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
