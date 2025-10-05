const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Backend setup");
});

app.listen(3000, () => {
  console.log("server runing at : 3000");
});
