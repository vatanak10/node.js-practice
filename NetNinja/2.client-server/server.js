const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');

    // res.write('<h2>Hello and Welcome!</h2>');
    // res.end;

    // send html file
    fs.readFile('./index.html', (err, data) => {
        if (err){
            console.log(err);
            res.end();
        } else{
            // res.write(data);
            res.end(data);
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log('listening for request...');
});