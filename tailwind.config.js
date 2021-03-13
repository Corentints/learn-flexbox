module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: [
        'bg-pink-600',
        'bg-pink-100',
        'hover:bg-pink-100',
        'bg-green-600',
        'bg-green-100',
        'hover:bg-green-100',
        'bg-blue-600',
        'bg-blue-100',
        'hover:bg-blue-100',
        'bg-indigo-600',
        'bg-indigo-100',
        'hover:bg-indigo-100',
        'bg-yellow-600',
        'bg-yellow-100',
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
