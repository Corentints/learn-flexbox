module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: [
        'bg-pink-600',
        'hover:bg-pink-100',
        'bg-green-600',
        'hover:bg-green-100',
        'bg-blue-600',
        'hover:bg-blue-100',
        'bg-indigo-600',
        'hover:bg-indigo-100',
        'bg-yellow-600',
        'hover:bg-yellow-100',
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
