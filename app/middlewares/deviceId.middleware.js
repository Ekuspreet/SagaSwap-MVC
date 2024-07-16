module.exports = function deviceIdVerification(req,res) {
    if(!req.cookies.deviceid){
        res.redirect("/")
    }
}
