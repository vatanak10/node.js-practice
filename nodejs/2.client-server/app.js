const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();

// CONNECT TO MONGODB
const dburi = 'mongodb+srv://Arzel:supervampire@nodejs-practice.oru6o.mongodb.net/testing?retryWrites=true&w=majority';
mongoose.connect(dburi, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => {
      console.log('connected to database ');
      app.listen(3000);
      console.log('lisening for request...');
    })
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// app.listen(3000);

// Middleware
/*
app.use((req,res,next) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path', req.path);
    console.log('method: ', req.method);
    next();
});
*/
// app.use(morgan('dev'));
app.use(morgan('tiny'));

// Mongoose and Mongo sandbox route
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    });

    blog.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/single-blog', (req, res) => {
    Blog.findById('5fc622933f019a21b0ae3a2b')
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
})

// Middleware and static files
// app.use(express.static('public'));

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

    // res.render('index', {title: 'Home', blogs});

    res.redirect('/blogs');
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

// BLOG routes
app.get('/blogs', (res,req) => {
    Blog.find()
        .then((result) => {
            res.render('index', {title: 'All Blogs', blogs: result});
        })
        .catch((err) => {
            console.log(err);
        });
})

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