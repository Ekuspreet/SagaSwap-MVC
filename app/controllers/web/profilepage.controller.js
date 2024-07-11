const express = require('express');
const router = express.Router();

  router.get('/play',(req,res) =>{
     // console.log('@views');
     res.render('profile.play.ejs',{ layout : "layouts/main.layout.ejs" } );
  }
)

  router.get('/friends',(req,res) =>{
     // console.log('@views');
     res.render('profile.friends.ejs',{ layout : "layouts/main.layout.ejs" } );
  }
)

  router.get('/settings',(req,res) =>{
     // console.log('@views');
     res.render('profile.settings.ejs',{ layout : "layouts/main.layout.ejs" } );
  }
)


module.exports = router;