const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

app.listen(3000);

// listen for request
app.get('/', (req, res) => {
    // res.send('<p>Send Nudes</p>');

    // res.sendFile('./html/index.html', {root: __dirname});

    res.render('index');
});

app.get('/about', (req, res) => {
    // res.send('<p>About to Send Nudes</p>');

    // res.sendFile('./html/about.html', {root: __dirname});

    res.render('about');
});

// redirects
app.get('about-us', (req, res) => {
    res.redirect('/about');
});

app.get('/blogs/create', (req, res) => {
    res.render('create');
});

// 404 redirects
// must be at the bottom so that if the rest of the path doesn't match, then it will return this 404 file.
app.use((req, res) => {
    // res.sendFile('./html/404.html', {root: __dirname});

    // res.status(404).sendFile('./html/404.html', {root: __dirname});

    res.status(404).render('404');
});