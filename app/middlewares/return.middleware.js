module.exports = function returner(code,isApiOrNot=false,res){
    switch(isApiOrNot){
        case true:
            switch(code){
                case 1 : 
                    res.status(401).json({message : "Authentication Failed. Token Not Found."})
                    break;
                case 2 : 
                    res.status(401).json({message : "Authentication Failed. Can't Find Session."})
                    break;
                case 3 : 
                    res.status(401).json({message : "Authentication Failed. Invalid User Agent"})
                    break;
                case 4 :
                    res.status(401).json({message : "Authentication Failed. Token Has Expired. Please Login Again"})
                    break;
                case 5 :
                    res.status(403).json({message : "User Is Currently Banned. Please Try Again After Sometime"})
            }


            break;
        case false:
                res.redirect("/")


            break;
    }
}