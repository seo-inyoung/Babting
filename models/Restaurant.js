const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  이름: String,
  주소: String,
  위도: String,
  경도: String,
  대표음식: String,
  간단한설명: String,
  태그: String,
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
