const express = require('express');
const router = express.Router();

router.get('/', (req, res) => 
    {
     
    // console.log('@views');
    res.render('web/register');
  })


module.exports = router;