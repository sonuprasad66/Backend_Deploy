// git remote add origin https://github.com/sonuprasad66/Backend_Deploy.git

const express = require("express");
const app = express();
require("dotenv").config;
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("home page API");
});

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
