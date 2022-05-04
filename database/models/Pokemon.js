const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
  skuNumber: String,
  itemName: String,
  itemStyle: String,
  itemUrl: String,
  itemCategory: String,
  time: String,
});

const BagStock = mongoose.model("StockInfo", StockSchema);

module.exports = BagStock;