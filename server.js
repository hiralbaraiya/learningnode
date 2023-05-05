require("@babel/register")({
  presets: ["@babel/preset-env"],
});
require("babel-polyfill");
const app = require("./app");

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
