const argon2 = require('argon2');

async function getHash(password){
    let hash = await argon2.hash(password) 
    return hash;
  }


async function verify(hash,password){
        if (await argon2.verify(hash,password)) {
          return true;
        } else {
          return false;
        }    
}

module.exports = {getHash,verify};