export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        primary: "#4f46e5", // indigo-600
        accent: "#6366f1", // indigo-500
      },
    },
  },
  plugins: [],
};
