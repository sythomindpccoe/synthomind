const express = require('express');
const router = express.Router();
const { Member, Project, Task, Doucuments, DailyUpdate} = require('../database/schema');

router.get('/',(req,res)=>{
  res.render('past_hackathon');
});

module.exports = router;