const pool = require('@helpers/db.connect');

async function executeQuery(session_id) {
    const values = [session_id];
    const query = "SELECT * FROM public.session WHERE id = $1";
    
    const result = await pool.query(query, values);
    return result.rows;  // Assuming you want to return the rows
}

async function getSessionById(session_id){
    const result = await executeQuery(session_id)
    return result
}

module.exports = getSessionById;
