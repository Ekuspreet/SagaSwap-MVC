
//const jwt = require('jsonwebtoken');
module.exports = function auth(authKeyword, isApiOrNot=false) { return function auth(req, res, next){

    // const token = req.header('x-auth-token'); 
    


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
    const token = "123456789"
    const user_agent = "Mozilla/5.0 Version/4.0";
    const active = false;

    // Auth Logic Written Here
    
    // Check for Token
    if(!getSessionById(token)) res.status(401).send('Access Denied. Invalid Token');
    // Check for Agent 
    const agent = getSessionById(token).user_agent;
    if(agent != user_agent) res.status(401).send('Access Denied. Invalid User Agent');
    // Check for Expiry
    if(!active) res.status(401).send('Access Denied. Session Expired. Inactivity Detected');
    // Check for User
    const user = getUserById(getSessionById(token).user_id);





    // Authorisation ( Requires NO DATABASE CALL )
    // Check for User Role
    


   // if(!token) res.status(401).send('Access Denied. No Token Provided.');
    req.user = {"name":"Mandeep Saini","_id":"12345"};
    req.authKeyword = authKeyword;
    next();

    // try{
    // const decoded = jwt.verify(token,'jwtPrivateKey');
    // req.user = decoded;
    // next();
    // }
    // catch(ex){
    //     res.status(400).send('Access Denied. Invalid Token');
    // }

    }
}