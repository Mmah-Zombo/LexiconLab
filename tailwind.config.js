/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js,ejs}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'sunset': '#f6d8ae',
        'charcoal': '#2e4057',
        'yale-blue': '#083d77',
        'cerise': '#da4167',
        'naples-yellow': '#f4d35e',
        'antique-white': '#fff0da'
      }
    },
  },
  plugins: [],
}

