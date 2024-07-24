const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_CONNECTION_URI;

const client = new MongoClient(uri);

    async function connection(client){
        const connection = await client.connect();
        if (connection) {
            console.log("Successfull");
            return
        } else {
            
        }

    }
    
    
module.exports = client;
  