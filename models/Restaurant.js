const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: String,
  adress: String,
  wedo: String,
  gyungdo: String,
  mainmenu: String,
});

module.exports = mongoose.model("Restaurant", restaurantSchema);