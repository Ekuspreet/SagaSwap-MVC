const express = require('express');
const router = express.Router();
const authenticator = require("@middlewares/auth.middleware.js")
const roomCodeGenerator = require("@helpers/generateRoomCode.js")
const jwt = require('jsonwebtoken');


router.post('/create', async (req, res) => {
console.log(req.headers);
    const user = await authenticator(req,res);
    const client = require("@helpers/mongo.connect.js")
    await client.connect();
    const rooms = client.db("SagaSwap").collection("Rooms")
    const roomCode = roomCodeGenerator();
    console.log(roomCode);
    let result;

    try {
        // Insert document into collection
        result = await rooms.insertOne({
            roomCode: roomCode,
            creator : user.user.id,
            ...req.body
        });
    } catch (error) {
        console.error('Error inserting document:', error);
        return res.status(500).json({ message: 'Error creating room' });
    }

    // Generate JWT token
    const roomToken = jwt.sign({ roomCode: roomCode }, process.env.JWT_SECRET);

    // Set the token in response header
    res.cookie('roomtoken', roomToken)

    // Send a success response
    res.status(200).json({ message: 'Room Created Successfully' });
});


module.exports = router;