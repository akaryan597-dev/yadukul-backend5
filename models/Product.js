const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  name: String,
  type: {type:String, enum:['cow','buffalo','other'], default:'other'},
  unit: {type:String, enum:['litre','kg'], default:'litre'},
  price: Number,
  photo: String,
  stockQuantity: Number,
  createdAt: {type:Date, default: Date.now}
});
module.exports = mongoose.model('Product', ProductSchema);
