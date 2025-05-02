/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Orange: "hsl(26, 100%, 55%)",
        Pale_orange: "hsl(25, 100%, 94%)",
        Very_dark_blue: "hsl(220, 13%, 13%)",
        Dark_grayish_blue: "hsl(219, 9%, 45%)",
        Grayish_blue: "hsl(220, 14%, 75%)",
        Light_grayish_blue: "hsl(223, 64%, 98%)",
        Black: "hsl(0, 0%, 0%)",
      },
      fontFamily: {
        sans: ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
