const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

app.listen(3000);

// Middleware
app.use((req,res,next) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path', req.path);
    console.log('method: ', req.method);
    next();
});

// listen for request
app.get('/', (req, res) => {
    const blogs = [
        {title: 'They listen to you', snippet: 'Anytime you need to talk, your partner is there to listen. You both know you have each other’s emotional support and that your partner is not a burden for you.' },
        {title: 'They want to help you', snippet: 'When someone is in love with you, they feel the need to help you. Your personal growth and development is a win for them, too.' },
        {title: 'They remember tiny details about you', snippet: 'Those who are in love with us tend to remember a lot of what we say and what we do.' },
        {title: 'They love you', snippet: 'When someone loves you, you can tell by the way that they treat you.' },
    ];
    // res.send('<p>Send Nudes</p>');

    // res.sendFile('./html/index.html', {root: __dirname});

    res.render('index', {title: 'Home', blogs});
});

app.get('/about', (req, res) => {
    // res.send('<p>About to Send Nudes</p>');

    // res.sendFile('./html/about.html', {root: __dirname});

    res.render('about', {title: 'About Us'});
});

// redirects
app.get('about-us', (req, res) => {
    res.redirect('/about');
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create Blog'});
});

// 404 redirects
// must be at the bottom so that if the rest of the path doesn't match, then it will return this 404 file.
app.use((req, res) => {
    // res.sendFile('./html/404.html', {root: __dirname});

    // res.status(404).sendFile('./html/404.html', {root: __dirname});

    res.status(404).render('404', {title: 'Not Found'});
});