const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'bgColorMain': '#ffffff',
      'bgColorBlock': '#131313',
      'textMain': '#464646',
      'hoverNavBar': '#363638',
      'active': '#EBEAF1',
      'buttonColor': '#ff0000',

    }
  },
  plugins: [],
});