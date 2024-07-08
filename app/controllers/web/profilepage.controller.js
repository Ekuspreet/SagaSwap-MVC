const express = require('express');
const router = express.Router();

router.get('/', (req, res) => 
    {
     const user = {
      username : "Ekuspreet Singh",
     }
    // console.log('@views');
    res.render('profile',user);
  })


module.exports = router;