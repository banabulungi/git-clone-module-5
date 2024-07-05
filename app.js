const express = require('express');
const logger = require('./loggerMiddleware'); 

const app = express();
app.use(logger); 

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
