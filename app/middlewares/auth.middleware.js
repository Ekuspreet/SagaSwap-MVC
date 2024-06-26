//const jwt = require('jsonwebtoken');
module.exports = function auth(authKeyword) { return function auth(req, res, next){

    const token = req.header('x-auth-token'); 



    // Check token availibility
    // If not -> return Error or Redirect to Login or call return method
    
    // If yes -> Check DB for session Token & Verify User Agent
    
    // If Token is not present in DB -> return Error or Redirect to Login or call return method
    
    // Check for token Expiry : If Expired -> return Error or Redirect to Login or call return method
    
    // Here the token is valid and in DB
    
    // getUser() with permission String 

    // Check for inactive user or user locking 
    
    // If Token is valid -> Next() and Slide User Expiry Time



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