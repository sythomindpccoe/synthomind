
const express = require('express');
require('dotenv').config();
const path = require('path');
const app = express();
const connectDB = require('./database/db');
connectDB();

const port = process.env.PORT

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
  res.render('home');
});


const dashboardRoutes = require('./routes/dashboard'); 
const createnewprojectRoutes = require('./routes/create_new_project'); 
const editprofileRoutes = require('./routes/edit_profile');
const hackathonRoutes = require('./routes/hackathon');
const profileRoutes = require('./routes/profile');
const pasthackathonRoutes = require('./routes/past_hackathon');
const loginPageRoutes = require('./routes/login_page');

app.use('/dashboard',dashboardRoutes);
app.use('/create_new_project',createnewprojectRoutes);
app.use('/edit_profile',editprofileRoutes);
app.use('/hackathon',hackathonRoutes);
app.use('/profile',profileRoutes);
app.use('/past_hackathon',pasthackathonRoutes);
app.use('/login_page',loginPageRoutes);

app.listen(port,()=>{
    console.log('server listing at port 8080');
})