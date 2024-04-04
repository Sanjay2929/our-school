/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "preschool-wave": "url('/src/assets/images/preschool-management/bg-wave.png')",
        "hangout-black-wave": "url('/src/assets/images/school-hangout/school-hangout-bg-wave.png')",
        "hangout-bg-blue": "url('/src/assets/images/school-hangout/blue_box.png')",
      },
    },
  },
  plugins: [],
};
