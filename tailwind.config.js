/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        asideColor: '#211d4c',
        asideColorHover: '#464364',
        grayBg: '#f5f6f8',
        lightBg: '#f7f9fc',
        violet: '#7662EA',
        mainBg: '#F7F9FC',
        customGreen: '#20AE3C',
        customOrange: '#FEA339',
        customDarkOrange: '#FC5025',
        customBlue: '#3872F0',
        customdarkViolet: '#973CCB',
      }
    },
    
  },
  plugins: [],
}

