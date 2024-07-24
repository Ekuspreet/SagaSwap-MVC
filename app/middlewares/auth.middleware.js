const getSessionById = require("@models/getSessionById")
const getUserBySessionId = require("@models/getUserBySessionId")
const slideSessionFrame = require("@models/slideExpiryWindow")
const returner = require('@middlewares/return.middleware')
const jwt = require('jsonwebtoken');
const {verify} = require('@helpers/hasher')

module.exports = async function auth( req,res,next,isApiOrNot=false){
    let sessionid,sessions;
    
// Procedure
    // Check token availibility
    // If not -> return Error or Redirect to Login or call return method
    // If yes -> Check DB for session Token & Verify User Agent
    // If Token is not present in DB -> return Error or Redirect to Login or call return method
    // Check for token Expiry : If Expired -> return Error or Redirect to Login or call return method
    // Here the token is valid and in DB
    // getUser() with permission String 
    // Check for inactive user or user locking 
    // If Token is valid -> Next() and Slide User Expiry Time
    // Required Functions
    // getSessionById()
    // getUserBySessionId()
    // slideSessionFrame()
    // authKeyword
    // Input : Session ID, User Agent Code,Device ID
    // Output : User Object

    // Checking For Session Id In Token

    if(!req.cookies.sessiontoken){
        returner(1,res,isApiOrNot)
        next()
    }

    jwt.verify(req.cookies.sessiontoken, process.env.JWT_SECRET, function(err,decoded){
        if(decoded){
             sessionid = decoded.sessionid
        }else{
            returner(1,res,isApiOrNot)
            next()
        }
    })

    sessions = await getSessionById(sessionid);
    if(sessions.length == 0){
            returner(2,res,isApiOrNot)
            next()
        }

    const agent = await verify(sessions[0].user_agent,req.headers['user-agent']);
    if(!agent){
            returner(3,res,isApiOrNot)
            next()
        }
    if(new Date() > sessions[0].expiry_time ){
        returner(4,res,isApiOrNot)
        next()
    }
  

    
    const user = await getUserBySessionId(sessions[0].user_id)
    if(user[0].is_locked){
        returner(5,res,isApiOrNot)
        next()
    }

    await slideSessionFrame(sessionid);
    return {user : user[0], sessionid : sessionid}
}
