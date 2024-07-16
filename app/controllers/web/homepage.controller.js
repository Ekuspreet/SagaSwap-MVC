const express = require('express');
const router = express.Router();
const random = require('@helpers/deviceID.generator')
router.get('/', (req, res) => 
  
  {
    
      if(!req.cookies.deviceid){
        res.cookie('deviceid',random(),{maxAge:1000000000})
      }
     const obj = {
      name : "Register",
      "description" : "something"
     }
    // console.log('@views');
    res.render('landing');
  })


module.exports = router;