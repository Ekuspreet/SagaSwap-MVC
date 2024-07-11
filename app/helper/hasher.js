const argon2 = require('argon2');

async function getHash(password){
    return hash = await argon2.hash(password) 
}

async function verify(hash,password){
        if (await argon2.verify(hash,password)) {
          return true;
        } else {
          return false;
        }    
}

module.exports = {getHash,verify};