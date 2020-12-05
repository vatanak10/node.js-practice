const express = require('express');
const bodyParser = require('body-parser');

const router = require('./routes/api');

// set up express app
const app = express();

app.use(bodyParser.json());

// initialize routes
app.use('/api', router);

// listen for request
app.listen(process.env.port || 3000, function(){
    console.log('ready for request...');
});

app.get('/', (req, res) => {
    console.log('GET request...');
    res.send({name: 'Arzel'});
});