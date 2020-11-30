const fs = require('fs');

// reading file
/*
fs.readFile('./text.txt', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

console.log('This is the End of Line.');
*/

// writing file
/*
fs.writeFile('./text.txt', 'What is up there?', () => {
    console.log('Writing Completed.')
})
*/

// directories
/*
if (!fs.existsSync('./doc')) {
    fs.mkdir('./doc', (err) => {
        if(err){
            console.log(err);
        }
        console.log('Folder Created.');
    })
} else {
    fs.rmdir('./doc', (err) => {
        if (err){
            console.log(err);
        }
        console.log('Folder Removed');
    })
}
*/

// deleteing files
if(fs.existsSync('./text.txt')) {
    fs.unlink('./text.txt', () => {
        console.log('File Deleted.');
    })
}