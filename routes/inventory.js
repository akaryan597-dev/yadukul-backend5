const express = require('express');
const router = express.Router();
const Inventory = require('../models/Inventory');

router.post('/', async (req,res)=>{
  const inv = new Inventory(req.body);
  await inv.save();
  res.json(inv);
});

router.get('/', async (req,res)=>{
  const inv = await Inventory.find().sort({date:-1});
  res.json(inv);
});

module.exports = router;
