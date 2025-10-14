const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
  customer: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  items: [{product: {type: mongoose.Schema.Types.ObjectId, ref:'Product'}, qty: Number, unitPrice: Number}],
  total: Number,
  subscription: {type:String, enum:['once','daily','weekly','monthly'], default:'once'},
  deliverySlot: String,
  status: {type:String, enum:['pending','delivered'], default:'pending'},
  deliveredAt: Date,
  createdAt: {type:Date, default: Date.now}
});
module.exports = mongoose.model('Order', OrderSchema);
