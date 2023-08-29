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
        'Philosopher': ['"Philosopher"', 'sans- serif']
      }
    },
  },
  plugins: [],
};
