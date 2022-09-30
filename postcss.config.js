// postcss.config.js
module.exports = {
  plugins: [require("tailwindcss"), require("nativewind/postcss")],
  plugins: {
    "nativewind/postcss": {
      output: "nativewind-output.js",
    },
  },
};
