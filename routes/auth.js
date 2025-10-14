const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/register', async (req,res)=>{
  try{
    const {name,email,password,role,address,phone,whatsapp} = req.body;
    let user = await User.findOne({email});
    if(user) return res.status(400).json({msg:'User exists'});
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    user = new User({name,email,password:hash,role,address,phone,whatsapp});
    await user.save();
    res.json({msg:'Registered'});
  }catch(e){ res.status(500).json({error:e.message}); }
});

router.post('/login', async (req,res)=>{
  try{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(400).json({msg:'Invalid credentials'});
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(400).json({msg:'Invalid credentials'});
    const token = jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET || 'secret', {expiresIn:'7d'});
    res.json({token, user:{name:user.name,email:user.email,role:user.role}});
  }catch(e){ res.status(500).json({error:e.message}); }
});

module.exports = router;
