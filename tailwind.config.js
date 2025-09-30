/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        iransans: ['IRANSans', 'sans-serif'],
        roundedblock: ['RoundedBlock', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
