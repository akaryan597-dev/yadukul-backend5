/*
Final seed - integrates client Excel data and demo users
*/
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const User = require('./models/User');
const Product = require('./models/Product');
const Order = require('./models/Order');

const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/yadukul';
mongoose.connect(MONGO).then(()=>console.log('Connected')).catch(console.error);

async function seed(){
  await User.deleteMany({});
  await Product.deleteMany({});
  await Order.deleteMany({});
  const owner = new User({name:'Mr. Ramesh Kumar', email:'owner@yadkul.com', password:'ownerpass', role:'owner', address:'Noida, Uttar Pradesh', phone:'+91-9999999999', whatsapp:'+91-9999999999'});
  await owner.save();
  const staff = new User({name:'Staff One', email:'staff1@yadkul.com', password:'staffpass', role:'staff', address:'Noida', phone:'+91-8888888888'});
  await staff.save();
  const customer = new User({name:'Customer One', email:'customer1@yadkul.com', password:'custpass', role:'customer', address:'Flat 101, Tower A, Noida', phone:'+91-7777777777', whatsapp:'+91-7777777777'});
  await customer.save();
  const p_1 = new Product({
    name: `BUFFALO`,
    type: 'buffalo',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_1.save();

  const p_2 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_2.save();

  const p_3 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_3.save();

  const p_4 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_4.save();

  const p_5 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_5.save();

  const p_6 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_6.save();

  const p_7 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_7.save();

  const p_8 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_8.save();

  const p_9 = new Product({
    name: `BUFFALO`,
    type: 'buffalo',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_9.save();

  const p_10 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_10.save();

  const p_11 = new Product({
    name: `BUFFALO`,
    type: 'buffalo',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_11.save();

  const p_12 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_12.save();

  const p_13 = new Product({
    name: `BUFFALO`,
    type: 'buffalo',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_13.save();

  const p_14 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_14.save();

  const p_15 = new Product({
    name: `BUFFALO`,
    type: 'buffalo',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_15.save();

  const p_16 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_16.save();

  const p_17 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_17.save();

  const p_18 = new Product({
    name: `BUFFALO`,
    type: 'buffalo',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_18.save();

  const p_19 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_19.save();

  const p_20 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_20.save();

  const p_21 = new Product({
    name: `BUFFALO`,
    type: 'buffalo',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_21.save();

  const p_22 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_22.save();

  const p_23 = new Product({
    name: `BUFFALO`,
    type: 'buffalo',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_23.save();

  const p_24 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_24.save();

  const p_25 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_25.save();

  const p_26 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_26.save();

  const p_27 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_27.save();

  const p_28 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_28.save();

  const p_29 = new Product({
    name: `BUFFALO`,
    type: 'buffalo',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_29.save();

  const p_30 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_30.save();

  const p_31 = new Product({
    name: `BUFFALO`,
    type: 'buffalo',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_31.save();

  const p_32 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_32.save();

  const p_33 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_33.save();

  const p_34 = new Product({
    name: `BUFFALO`,
    type: 'buffalo',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_34.save();

  const p_35 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_35.save();

  const p_36 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_36.save();

  const p_37 = new Product({
    name: `BUFFALO`,
    type: 'buffalo',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_37.save();

  const p_38 = new Product({
    name: `BUFFALO`,
    type: 'buffalo',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_38.save();

  const p_39 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_39.save();

  const p_40 = new Product({
    name: `BUFFALO`,
    type: 'buffalo',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_40.save();

  const p_41 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_41.save();

  const p_42 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_42.save();

  const p_43 = new Product({
    name: `BUFFALO`,
    type: 'buffalo',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_43.save();

  const p_44 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_44.save();

  const p_45 = new Product({
    name: `BUFFALO`,
    type: 'buffalo',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_45.save();

  const p_46 = new Product({
    name: `BUFFALO`,
    type: 'buffalo',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_46.save();

  const p_47 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_47.save();

  const p_48 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_48.save();

  const p_49 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_49.save();

  const p_50 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_50.save();

  const p_51 = new Product({
    name: `BUFFALO`,
    type: 'buffalo',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_51.save();

  const p_52 = new Product({
    name: `BUFFALO`,
    type: 'buffalo',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_52.save();

  const p_53 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_53.save();

  const p_54 = new Product({
    name: `COW`,
    type: 'cow',
    unit: 'kg',
    price: 0,
    photo: '',
    stockQuantity: 100
  });
  await p_54.save();

  const order = new Order({customer: customer._id, items:[{product: p_1._id, qty:3, unitPrice: p_1.price}], total: (p_1.price * 3), subscription:'once', deliverySlot:'2025-10-16 09:00-11:00'});
  await order.save();
  console.log('Seeded final');
  process.exit(0);
}
seed();
