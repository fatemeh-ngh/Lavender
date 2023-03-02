/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primaryColor: '#613DA9',
      secondaryColor: 'd9cce6',
      white: '#ffffff',
    },
    fontSize: {
        xs: '10px',
        sm: '12px',
        md: '14px',
        lg: '16px',
        xl: '24px',
    }
  },
  plugins: [],
}
