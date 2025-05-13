const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
  res.render('create_new_project');
});

module.exports = router;