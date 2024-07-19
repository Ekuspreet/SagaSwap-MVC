const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.json())
const {getHash,verify} = require('@helpers/hasher');
const jwt = require('jsonwebtoken')
router.post('/', async (req,res)=>{

    const pool = require('@helpers/db.connect')
    console.log(req.body)
   // Extracting Details From Request Body 
    const details = req.body;
    const values = [details.email]
    const query = "SELECT * FROM PUBLIC.USERS WHERE email = $1"
    const client = await pool.connect();
    async function executeQuery(query, values) {
            
            const result = await client.query(query, values);            
            console.log(result); 
            
            if(result.rowCount){
                console.log(result.rows[0].pass_hash)
                console.log(details.password)
                console.log("User Exists")
                verifyPasswordAndReturn(result.rows[0],details);
             }
            else{
                console.log("User Doesnt Exist");
                res.status(401).send({message: "User Doesnt Exist!"});
             }
            // return result.rows; // Assuming you want to return rows on success
    }
    async function verifyPasswordAndReturn( user,details ){
        console.log("Verifying Password .....");
        const legitUser = await verify(user.pass_hash,details.password)
        console.log("Password verificaton done...");
        
        console.log("isUserCorrect : ", legitUser)
        if(!legitUser){
            console.log("Email And Password Do Not Match")
            res.status(401).send({message: "Email and password do not match"});
        }else{
            console.log("User Is Legit")
            const sessionid = await insertSession(user);
            
            res.status(200).send({message : `user Logged in successfully ${sessionid}`})
        }
        }

    async function insertSession(user){
        const values = [user.id,await getHash(req.headers['user-agent'])]
        const query = "INSERT INTO PUBLIC.SESSION(user_id,user_agent) VALUES($1,$2) RETURNING ID"

        const result = await client.query(query, values);            
        if(result){
            const token = jwt.sign({sessionid : result.rows[0].id }, process.env.JWT_SECRET)
            console.log(token);
            console.log("Session Created")
            res.cookie('sessiontoken', token)
        }else{
            res.status(401).send({message: "Cannot create session currently."});
        }
        return result.rows[0].id;
    }
    executeQuery(query,values)
// console.log(req.headers)
// res.send()
})




module.exports = router