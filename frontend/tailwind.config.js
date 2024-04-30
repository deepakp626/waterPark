/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: ' #2C8ECE',
        secondary: '#4A4A4A',
        orange:"#FF9101",
        bg:"#F0F0F0"
      },
      theme:{
        // p: '#4A4A4A',
      }
     
    },
  },
  plugins: [],
}

