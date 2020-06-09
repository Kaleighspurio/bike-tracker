const express = require('express');
const app = express();

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes =require('./routes/htmlRoutes');

// This middleware that is needed to use POST data. It needs to go before the other app.use
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const PORT = 8080;

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});