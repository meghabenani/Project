/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens:{
      "xs":"300px",
      "sm":"600px",
      "md":"800px",
      "lg":"1000px",
      "xl":"1200px",
      "2xl":"1300px"
    }
  },
  plugins: [],
}

