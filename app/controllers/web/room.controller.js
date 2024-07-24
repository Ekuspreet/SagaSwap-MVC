const express = require('express');
const router = express.Router();
const authenticator = require('@middlewares/auth.middleware')

  router.get('/',(req,res) =>{
    res.render("room", {
        layout : "layouts/room.layout.ejs"
    })
  })
module.exports = router;