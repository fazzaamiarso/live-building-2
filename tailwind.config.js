/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors : {
"Marine blue": hsl(213, 96%, 18%)
"Purplish blue": hsl(243, 100%, 62%)
"Pastel blue": hsl(228, 100%, 84%)
"Light blue": hsl(206, 94%, 87%)
"Strawberry red": hsl(354, 84%, 57%)
      }
    },
  },
  plugins: [],
};
