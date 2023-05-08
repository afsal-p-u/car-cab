/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'image-1': "linear-gradient(to right bottom, rgba(0,0,0,.7) 0%, rgba(0,0,0,.7) 100%), url('../src/assets/image-1.jpg')",
     },
    },
  },
  plugins: [],
}

