const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req,res)=>{
  const products = await Product.find();
  res.json(products);
});

router.post('/', async (req,res)=>{
  const p = new Product(req.body);
  await p.save();
  res.json(p);
});

router.put('/:id', async (req,res)=>{
  const p = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.json(p);
});

router.delete('/:id', async (req,res)=>{
  await Product.findByIdAndDelete(req.params.id);
  res.json({msg:'Deleted'});
});

module.exports = router;
