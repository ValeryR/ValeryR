const fs = require("fs");

let cssContainer = `
h1 {
  color: red;
}`;

for (let i = 0; i < 30000; i++) {
  cssContainer += `
  .useless-${i}-${parseInt(Math.random() * 1000000)}-code-${i + 1} {
    background-color: cadetblue;
  }`;
}

cssContainer += `
.vasya {
  color: white;
  display: inline-block;
  margin: 0 30px;
  background-color: purple !important;
}`;
/**
 * output path
 */
fs.writeFileSync("./block-css/gen.css", cssContainer);
fs.writeFileSync("./only-css/gen.css", cssContainer);
