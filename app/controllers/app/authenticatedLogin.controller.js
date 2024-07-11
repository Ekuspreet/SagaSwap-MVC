const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.json())
const {verify} = require('@helpers/hasher');
router.post('/', async (req,res)=>{
    
    const db_client = require('@helpers/db.connect')
console.log(req.body)
    // VErification
    const details = req.body;
    if(req.headers['session-id']){
        res.send("User Already Logged In")
    }
    // const query = "INSERT INTO public.users(email,gamertag,name,pass_hash) VALUES($1,$2,$3,$4) RETURNING id";
    // console.log(await getHash(req.body.password))
    const values = [details.email]
    console.log('reached here')
    const query = "SELECT * FROM PUBLIC.USERS WHERE email = $1"
    // console.log(db_client)
    // await db_client.query(query,values).then err=>console.log(err);
    async function executeQuery(query, values) {
        
            const result = await db_client.query(query, values);            
             if(result.rowCount){
                 console.log("User Exists")
                 console.log(result.rows[0].pass_hash)
                 console.log(details.password)
                 verifyPasswordAndReturn(result.rows[0],details);
             }
             else{
                 console.log("User Doesnt Exist");
            res.status(401).send({message: "User Doesnt Exist!"});

             }
            // return result.rows; // Assuming you want to return rows on success
    }
    async function verifyPasswordAndReturn( user,details ){
        const legitUser = await verify(user.pass_hash,details.password)
        console.log("isUserCorrect", legitUser)
        if(!legitUser){
            console.log("User isnt legit")
            res.status(401).send({message: "Invalid Credentials"});
        }else{
            // console.log("User Legitimacy", legitUser)
            console.log("User Is Legit")
            const sessionid = await insertSession(user);
            res.status(200).send({message : `user Logged in successfully ${sessionid}`})
        
        }
        }

    async function insertSession(user){
        const values = [user.id,req.headers['user-agent']]
        const query = "INSERT INTO PUBLIC.SESSION(user_id,user_agent) VALUES($1,$2) RETURNING ID"

        const result = await db_client.query(query, values);            
        if(result){
            console.log("Session Created")
            res.setHeader('session-id', result.rows[0].id)
            
        }
        return result.rows[0].id;
    }
    executeQuery(query,values)
// console.log(req.headers)
// res.send()
})




module.exports = router