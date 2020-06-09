// This creates a router so we can add our routes
const router = require('express').Router();
const path = require('path');

// add our routes

// TODO: html route for displaying the home page
router.get('/', (req, res) => {
    const filePath = path.join(__dirname, '..', 'public', 'html', 'index.html');
    res.sendFile(filePath);
});


module.exports = router;