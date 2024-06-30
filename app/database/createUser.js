module.exports = function(db_client){
    db_client.query(`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL UNIQUE,
            email VARCHAR(255) NOT NULL UNIQUE,
            pass_hash TEXT NOT NULL,
            gamertag VARCHAR(255) NOT NULL UNIQUE,
            is_active BOOLEAN NOT NULL DEFAULT TRUE,
            is_locked BOOLEAN NOT NULL DEFAULT FALSE
        )
    `, (err, res) => {
        if (!err){
            console.log('User Table Created');
        }
        else {
            console.error('Error Creating User Table:', err);
        }
    });
}
