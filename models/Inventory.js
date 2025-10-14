const mongoose = require('mongoose');
const InventorySchema = new mongoose.Schema({
  date: {type:Date, default: Date.now},
  milkFromFarmLitres: Number,
  converted: [{productName:String, litres:Number}],
  notes: String
});
module.exports = mongoose.model('Inventory', InventorySchema);
