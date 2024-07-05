const argon2 = require('argon2')

async function getHash(password){
    return hash = await argon2.hash(password) 
}

async function verify(hash,password){
    return await argon2.verify(hash,password)
}

module.exports = getHash,verify