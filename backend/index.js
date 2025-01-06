const express = require("express");
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Simple route for testing
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Connect db fail', err);  // Log chi tiết lỗi MongoDB
    });

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
