const express = require('express');
const app = express();

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes =require('./routes/htmlRoutes');


const PORT = 8080;

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});