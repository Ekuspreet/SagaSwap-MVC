const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser')
const db_client = require('@helpers/db.connect')
router.use(bodyParser.json())
const getHash = require('@helpers/hasher');
const { extendWith } = require('lodash');
router.post('/', async (req,res)=>{

 console.log(req.body)
    // VErification
    const details = req.body;
    const query = "INSERT INTO public.users(email,gamertag,name,pass_hash) VALUES($1,$2,$3,$4) RETURNING id";
    console.log(await getHash(req.body.password))
    const values = [details.email, details.gamerid, details.name, await getHash(details.password)]
    console.log('reached here')
    // console.log(db_client)
    // await db_client.query(query,values).then err=>console.log(err);
    async function executeQuery(query, values) {
        try {
            const result = await db_client.query(query, values);
            return result.rows; // Assuming you want to return rows on success
        } catch (err) {
            console.error('Error executing query:', err);
            throw err; // Re-throw the error to propagate it further if needed
        }
    }
    // executeQuery(query,values)
    console.log("ADDED USER ", await executeQuery(query,values))
// console.log(req.headers)
// res.send()
})




module.exports = router