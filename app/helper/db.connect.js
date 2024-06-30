const { Client } = require('pg');
const client = new Client({
    host: process.env.DB_HOST,

    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB,
    port: process.env.DB_PORT,

});

client.connect(
    (err) =>{
        if(err) {
            console.log('Error Connecting to DB');
            console.log(err);
            return;
        }
        console.log('Connected to DB');
    }
)

module.exports = client;