
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');
const app = express();

const port = process.env.PORT

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));


app.get('/',(req,res)=>{
  res.render('home');
})

app.get('/dashboard',(req,res)=>{
  res.render('dashboard');
});

app.get('/create_new_project',(req,res)=>{
  res.render('create_new_project');
});

app.get('/profile',(req,res)=>{
  res.render('profile');
});

app.get('/edit_profile',(req,res)=>{
  res.render('edit_profile');
});

app.get('/hackathon',(req,res)=>{
  res.render('hackathon');
});

app.get('/past_hackathon',(req,res)=>{
  res.render('past_hackathon');
});



app.listen(port,()=>{
    console.log('server listing at port 8080');
})