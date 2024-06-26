const { user_id } = require("./user.model");

let userSessions = [
    {
        session_id: "2133042",
        user_agent: "Mozilla/5.0 Version/4.0",
        user_id: "38447274",
        expiry: new Date(Date.now())
    },
    {
        session_id: "2133043",
        user_agent: "Mozilla/5.0 Version/5.0",
        user_id: "38447275",
        expiry: new Date(Date.now())
    },
    {
        session_id: "2133044",
        user_agent: "Mozilla/5.0 Version/6.0",
        user_id: "38447276",
        expiry: new Date(Date.now())
    },
    {
        session_id: "2133045",
        user_agent: "Mozilla/5.0 Version/7.0",
        user_id: "38447277",
        expiry: new Date(Date.now())
    },
    {
        session_id: "2133046",
        user_agent: "Mozilla/5.0 Version/8.0",
        user_id: "38447278",
        expiry: new Date(Date.now())
    },
    {
        session_id: "2133047",
        user_agent: "Mozilla/5.0 Version/9.0",
        user_id: "38447279",
        expiry: new Date(Date.now())
    },
    {
        session_id: "2133048",
        user_agent: "Mozilla/5.0 Version/10.0",
        user_id: "38447280",
        expiry: new Date(Date.now())
    },
    {
        session_id: "2133049",
        user_agent: "Mozilla/5.0 Version/11.0",
        user_id: "38447281",
        expiry: new Date(Date.now())
    },
    {
        session_id: "2133050",
        user_agent: "Mozilla/5.0 Version/12.0",
        user_id: "38447282",
        expiry: new Date(Date.now())
    },
    {
        session_id: "2133051",
        user_agent: "Mozilla/5.0 Version/13.0",
        user_id: "38447283",
        expiry: new Date(Date.now())
    },
     
    {
        session_id: "IVA4hRgkSAdWbVYdnhMRiZ0HrvzsifjW",
        user_agent: "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0",
        user_id: "38447284",
        expiry: new Date(Date.now())
    },
     
];

function getSessionById(session_id) {
    return userSessions.find(session => session.session_id === session_id);
}

function slideSessionById(session_id){
    userSessions[session_id].expiry = new Date(Date.now() + 30*60*1000);
}

module.exports = {
getSessionById,slideSessionById    
}
