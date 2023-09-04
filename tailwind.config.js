// /** @type {import('tailwindcss').Config} */
// // module.exports = {
// //   content: ["./src/**/*.{js,jsx,ts,tsx}"],
// //   theme: {
// //     extend: {},
// //   },
// //   plugins: [],
// // }
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//     theme: {
//       extend: {
//         screens: {
//             'xs': '475px',
//             ...defaultTheme.screens,
//           },},
//     },
//     plugins: [],
//   // theme: {
//   //   screens: {
//   //     'xs': '475px',
//   //     ...defaultTheme.screens,
//   //   },
//   // },
//   // plugins: [],
// }

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        '2xs': '350px',
        '3xs': '300px',
        ...defaultTheme.screens,
      },
      fontFamily: {
        'noticia': ['"Noticia Text"', 'serif'],
        'Philosopher': ['"Philosopher"', 'sans- serif'],
        'lucida-bright-regular': ['"lucida-bright-regular"', 'sans-serif'],
        'raleway': ['"Raleway"', 'sans-serif'],
        'Cormorant Garamond': ['"Cormorant Garamond"', 'serif'],
        'Lobster Two': ['"Lobster Two"', 'cursive'],
      },
      colors: {
        custom: {
          212529: '#212529',
        },
      },
    },
  },
  plugins: [],
};
