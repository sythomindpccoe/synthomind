const express = require('express');
const router = express.Router();
const { Member, Project, Task, Doucuments, DailyUpdate,experience, completedhackathon, education} = require('../database/schema');

router.get('/',(req,res)=>{
    res.render('login_page');
});

module.exports = router;
