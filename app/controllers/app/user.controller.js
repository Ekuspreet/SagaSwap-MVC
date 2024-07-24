const express = require('express');
const router = express.Router();
const authenticator = require("@middlewares/auth.middleware.js")

router.post('/logout', async (req, res) => 
    {
        console.log(req.cookies)
        console.log("Logging Out ....");
        const user = await authenticator(req,res) 
        const values = [
            user.sessionid
        ]
        console.log(values);
        const pool = require('@helpers/db.connect.js')
        const query_string =  `
        UPDATE public.session
        SET expiry_time = NOW()
        WHERE id = $1
        RETURNING *;
        `

       
            const result = await pool.query(query_string,values)
            if(result)
            // console.log(result);
            
            res.status(200).json({'message': "Logged Out Successfully"})
    })


module.exports = router;