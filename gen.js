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
h1 {
  color: purple;
}`;

fs.writeFileSync("./gen.css", cssContainer);
