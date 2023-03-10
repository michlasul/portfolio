/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./portfolio-design.html", "resource.html"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#4f46e5',
        secondary: '#0f172a',
        paragraf: '#64748b',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
