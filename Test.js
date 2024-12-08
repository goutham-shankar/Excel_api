const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const functions = require('./Data');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Sample data





// Routes
app.get('/functions', (req, res) => {
    res.json(functions);
});






// Start the server
app.listen(PORT, () => {
    console.log(`API is running at http://localhost:${PORT}`);
});
