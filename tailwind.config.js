/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",   // Next.js pages
      "./components/**/*.{js,ts,jsx,tsx}", // Next.js components
      "./app/**/*.{js,ts,jsx,tsx}", // If using App Router (Next.js 13+)
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  