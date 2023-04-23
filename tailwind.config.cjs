/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing': "url('./src/assets/pictures/landing.jpg')",
        '21' : "url(./src/assets/pictures/21.jpeg)",
        '22' : "url(./src/assets/pictures/22.jpeg)",
        '33' : "url(./src/assets/pictures/33.jpeg)",
        '34' : "url(./src/assets/pictures/34.jpeg)",
        '35' : "url(./src/assets/pictures/35.jpeg)",
      }
    },
    colors: {
      primaryColor: '#613DA9',
      primaryColorHover: '#613DA971',
      secondaryColor: 'd9cce6',
      white: '#ffffff',
    },
    fontSize: {
        xs: '10px',
        sm: '12px',
        md: '14px',
        lg: '16px',
        xl: '24px',
        xxl: '40px',
    }
  },
  plugins: [],
  corePlugins: {
    // preflight: false,
  }
}
