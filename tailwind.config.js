/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '4xl':'60px',
        '5xl':'40px'
      },
    },
  },
  plugins: [],
}

