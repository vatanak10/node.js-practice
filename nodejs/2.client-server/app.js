const express = require('express');

// express app
const app = express();

app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p>Send Nudes</p>');
    res.sendFile('./html/index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
    // res.send('<p>About to Send Nudes</p>');
    res.sendFile('./html/about.html', {root: __dirname});
});