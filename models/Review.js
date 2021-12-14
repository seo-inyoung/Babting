const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  제목: String,
  식당이름: String,
  내용: String,
  이미지: String,
  작성자: String,
});

module.exports = mongoose.model("Review", reviewSchema);
