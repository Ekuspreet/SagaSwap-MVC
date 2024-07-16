const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser')
const deviceIdVerification = require('@middlewares/deviceId.middleware')
router.get('/', (req, res) => 
    {
     deviceIdVerification(req,res)
    

    res.render('register');
    
  })


module.exports = router;