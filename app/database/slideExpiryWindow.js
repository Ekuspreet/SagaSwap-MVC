const pool = require('@helpers/db.connect');

async function slideExpiryWindow(session_id) {
    const values = [session_id];
    const query = `UPDATE public.session
                   SET expiry_time = NOW() + INTERVAL '30 minutes'
                   WHERE id = $1
                   RETURNING *;`;
    
    const result = await pool.query(query, values);
    console.log("Slided");
    return result;  // Assuming you want to return the rows
}


module.exports = slideExpiryWindow;
