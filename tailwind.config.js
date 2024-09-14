/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Đảm bảo Tailwind theo dõi các file trong src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
