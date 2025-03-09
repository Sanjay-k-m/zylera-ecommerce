/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#FF6347', // Tomato
          'secondary': '#4169E1', // Royal Blue
          'accent': '#FFD700', // Gold
          'custom-gray': {
            100: '#F0F0F0',
            200: '#D3D3D3',
            500: '#808080',
            900: '#282828',
          },
        },
      },
    },
    plugins: [],
  };