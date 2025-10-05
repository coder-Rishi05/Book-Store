// const express = require("express");

import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.send("Backend setup");
});

app.listen(PORT, () => {
  console.log("server runing at : ", PORT);
});
