const express = require('express');
const router = express.Router();

router.get('/', (req, res) => 
    {
     const obj = {
      name : "Register",
      "description" : "something"
     }
    // console.log('@views');
    res.render('landing');
  })


module.exports = router;