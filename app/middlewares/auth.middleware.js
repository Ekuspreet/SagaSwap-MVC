const getSessionById = require("@databases/getSessionById")
const getUserBySessionId = require("@databases/getUserBySessionId")
const slideSessionFrame = require("@databases/slideExpiryWindow")
const returner = require('@middlewares/return.middleware')
//const jwt = require('jsonwebtoken');
module.exports = function auth( req,res,next,isApiOrNot=false){
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
    // Input : Session ID, User Agent Code
    // Output : User Object
// Taking Input Here
    // const token = req.header('x-auth-token');  // for developement
    // const token = "123456789"
    // const user_agent = "Mozilla/5.0 Version/4.0";
    // const active = false;
    // Auth Logic Written Here
    // // Check for Token
    // if(!getSessionById(cookieObject.sessionid)) res.status(401).send('Access Denied. Invalid Token');
    // // // Check for Agent 
    // const agent = token;
    // const session = getSessionById(cookieObject.sessionid);
    // if(session.user_agent != agent) res.status(401).send('Access Denied. Invalid User Agent');
    // // // Check for Expiry
    // // if(session.expiry < new Date()) res.status(401).send('Access Denied. Token Expired');
    // // // Check for User
    // const user = getUserById(session.user_id);
    // if(!user) res.status(401).send('Access Denied. Invalid User');
    // // const user = getUserById(getSessionById(token).user_id);
    // // Authorisation ( Requires NO DATABASE CALL )
    // // Check for User Role
    // // if(!token) res.status(401).send('Access Denied. No Token Provided.');
    // req.user = user;
    // req.authKeyword = authKeyword;
    // next();
    // // try{
    // // const decoded = jwt.verify(token,'jwtPrivateKey');
    // // req.user = decoded;
    // // next();
    // // }
    // // catch(ex){
    // //     res.status(400).send('Access Denied. Invalid Token');
    // // }

    }
