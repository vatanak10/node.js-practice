const express = require('express');
const router = require('./routes/api');

const app = express();
app.use('/api', router);

app.listen(process.env.port || 3000, function(){
    console.log('ready for request...');
});

app.get('/', (req, res) => {
    console.log('GET request...');
    res.send({name: 'Arzel'});
});