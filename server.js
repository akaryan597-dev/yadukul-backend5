const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req,res) => res.send('Yadukul Dairy API — Revamped backend running'));

// simple health check and stats
app.get('/api/health', (req,res) => {
  res.json({status: 'ok', time: new Date(), env: process.env.NODE_ENV || 'development'});
});

// basic route placeholders (extend in real app)
app.use('/api/products', require('./routes/products'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/inventory', require('./routes/inventory'));
app.use('/api/auth', require('./routes/auth'));

// connect mongodb
const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/yadukul';
mongoose.connect(MONGO).then(()=>console.log('MongoDB connected')).catch(err=>console.error(err));

app.listen(port, ()=> console.log(`Server started on port ${port}`));
