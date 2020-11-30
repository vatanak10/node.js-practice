const express = require('express');

// express app
const app = express();

app.listen(3000);

// listen for request
app.get('/', (req, res) => {
    // res.send('<p>Send Nudes</p>');
    res.sendFile('./html/index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
    // res.send('<p>About to Send Nudes</p>');
    res.sendFile('./html/about.html', {root: __dirname});
});

// redirects
app.get('about-us', (req, res) => {
    res.redirect('/about');
});

// 404 redirects
// must be at the bottom so that if the rest of the path doesn't match, then it will return this 404 file.
app.use((req, res) => {
    res.sendFile('./html/404.html', {root: __dirname});
});