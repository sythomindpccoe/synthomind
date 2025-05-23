const express = require('express');
const router = express.Router();
const { Member, Project, Task, Doucuments, DailyUpdate,experience, completedhackathon, education} = require('../database/schema');

router.get('/', async (req,res)=>{

  try {

    const member = await Member.findOne({email : 'vipulphatangare3@gmail.com'});
    res.render('profile',{member});
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;