const express = require("express");
const app = express();
const port = 5000;
const fs = require("fs");
const path = require("path");

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Hyunsoo:qwer1234@hyunsoo.otohm.mongodb.net/data?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
