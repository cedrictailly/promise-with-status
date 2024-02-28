
const terser  = require("@rollup/plugin-terser");
const license = require("rollup-plugin-license");

module.exports = [{
  input : "index.mjs",
  output: {
    file     : "dist/promise-with-status.min.js",
    format   : "umd",
    name     : "PromiseWithStatus",
    sourcemap: true,
  },
  plugins: [
    terser(),
    license({
      banner: {
        commentStyle: "slash",
        content     : "promise-with-status v<%= pkg.version %>\nby <%= pkg.author %>\nMIT Licence",
      },
    }),
  ],
}];
