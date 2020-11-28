// Stream and Buffering
// Start using data, before it has finished loading.

const fs = require('fs');

const readStream = fs.createReadStream('./love.txt', {encoding:"utf-8"});
const writeSteam = fs.createWriteStream('./luv.txt');

/*
readStream.on('data', (chunk) => {
    console.log('------ New Chunk -----');
    console.log(chunk);

    writeSteam.write('\n New Chunk \n');
    writeSteam.write(chunk);
})
*/

// piping, better than the code above!
readStream.pipe(writeSteam);