/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: "300px",
      xs: "400px",
      // => @media (min-width: 500px) {...}

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "850px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      white: "#ffffff",
      lwhite: "#F7F7F7",
      transparent: "transparent",
      black: "#000000",
      lblack: "#263233",
      vlblack: "#3F3B3B",
      dgray: "rgba(245, 245, 245, 0.50)",
      dblue: "#1D5D9B",
      vlblue: "#96C1EA",
      lblue: "rgba(150, 193, 234, 0.20)",
      red: "orange",
      green:"green",
      branddark: "#292D32",
      brandlight: "rgba(117, 194, 246, 0.20)"
    },
    extend: {},
  },
  plugins: [],
}

