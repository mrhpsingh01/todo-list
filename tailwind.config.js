const Nth = require("tailwindcss-nth-child");
const plugin = new Nth("n");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  variants: {
    // extend the backgroundColor variants
    extend: {
      backgroundColor: ["nth-child"],
    },
  },
  plugins: [
    plugin.nthChild(), // add-plugin
  ],
  theme: {
    extend: {},
  },
};
