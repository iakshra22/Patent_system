const express = require("express");
const cors = require("cors");
const mongoose=require("mongoose");

const app = express();
const Blog=require("./models/blogs")

app.use(cors());

app.get("/", (req, res) => {
  res.send("api is running");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});