/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fe696a",
        primaryCoating: "#e86e6ede;",
        secondary: "#f3f5f9",
        blue: "#007bff",
        indigo: "#6610f2",
        purple: "#6f42c1",
        pink: "#e83e8c",
        red: "#dc3545",
        orange: "#fd7e14",
        yellow: "#ffc107",
        green: "#28a745",
        teal: "#20c997",
        cyan: "#17a2b8",
        white: "#fff",
        gray: "#e3e9ef",
        focus: '#fe696a4d',
        grayDark: "#373f50",
        success: "#42d697",
        info: "#69b3fe",
        warning: "#fea569",
        danger: "#f34770",
        light: "#fff",
        dark: "#373f50",
        accent: "#4e54c8"
      },
      borderRadius: {
        md: '0.3125rem'
      },
      boxShadow: {
        btnShadow: '0 0.5rem 1.125rem -0.5rem rgb(254 105 106 / 90%)'
      },
      maxWidth: {
        sm: '500px'
      },
      margin: {
        negative1: '-1px'
      }
    },
  },
  plugins: [],
}
