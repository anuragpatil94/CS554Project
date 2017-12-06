const express = require("express");
const app = express();
console.log(app);

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT =  5000;

app.listen(PORT);
