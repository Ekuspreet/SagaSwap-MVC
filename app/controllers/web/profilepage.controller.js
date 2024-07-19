const express = require('express');
const router = express.Router();
const authenticator = require('@middlewares/auth.middleware')

  router.get('/',(req,res) =>{
    res.redirect("/profile/play")
  })
  router.get('/play',async (req,res) =>{
     // console.log('@views');
     const user = await authenticator(req,res)
     console.log(user);
     res.render('profile.play.ejs',{ layout : "layouts/main.layout.ejs" , user : user } );
  }
)

  router.get('/friends',async(req,res) =>{
     const user = await authenticator(req,res)
     // console.log('@views');
     res.render('profile.friends.ejs',{ layout : "layouts/main.layout.ejs" , user : user} );
  }
)

  router.get('/settings',async (req,res) =>{
     const user = await authenticator(req,res)

    // console.log('@views');
     res.render('profile.settings.ejs',{ layout : "layouts/main.layout.ejs" , user : user } );
  }
)


module.exports = router;