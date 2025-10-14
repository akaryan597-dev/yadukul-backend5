const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: String,
  email: {type:String, unique:true, required:true},
  password: String,
  role: {type:String, enum:['owner','staff','customer'], default:'customer'},
  address: String,
  phone: String,
  whatsapp: String,
  createdAt: {type:Date, default: Date.now}
});
module.exports = mongoose.model('User', UserSchema);
