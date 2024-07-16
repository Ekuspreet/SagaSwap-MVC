const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.json())
const {getHash} = require('@helpers/hasher');
const errors = require('@middlewares/db.errors')
const pool = require('@helpers/db.connect')


router.post('/', async (req,res)=>{
    
    // console.log(req.body)
    console.log(req.headers.cookie);
    const details = req.body;
    const query = "INSERT INTO public.users(email,gamertag,name,pass_hash) VALUES($1,$2,$3,$4) RETURNING id";
    console.log(details)
    // console.log(getHash);
    const values = [details.email, details.gamerid, details.name, await getHash(details.password)]
    console.log(values)

    async function executeQuery(query, values,res) {        
            const client = await pool.connect();
            console.log('connected to db')
            try{

                const result = await client.query(query, values);
                console.log(result)
                return result.rows; // Assuming you want to return rows on success
            }catch(err){
                console.log(err);
                res.status(400).json({message : errors[err.constraint]})
                
            }
    }
    const rows = await executeQuery(query,values)
    console.log("ADDED USER ",rows)
    res.status(200).json({message: "User Added"});
// console.log(req.headers)
// res.send()
})




module.exports = router