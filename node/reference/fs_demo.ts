const fs = require('fs');
const path = require('path');

// create folder

fs.mkdir(path.join(__dirname, '/myfolder'), {}, err => {
    if (err) throw err
    console.log('The new folder was created successfuly!')
});

fs.writeFile(path.join(__dirname, '/myfolder', 'myfile.txt'), 'Hey there!', err =>{
    if (err) throw err
    console.log('The file was successfully created !')
})