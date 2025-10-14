const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/', async (req,res)=>{
  const o = new Order(req.body);
  await o.save();
  res.json(o);
});

router.get('/', async (req,res)=>{
  const orders = await Order.find().populate('customer').populate('items.product');
  res.json(orders);
});

router.put('/:id/status', async (req,res)=>{
  const {status, deliveredAt} = req.body;
  const o = await Order.findByIdAndUpdate(req.params.id, {status, deliveredAt}, {new:true});
  res.json(o);
});

module.exports = router;
