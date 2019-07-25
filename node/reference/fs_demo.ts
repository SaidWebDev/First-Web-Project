const fs = require('fs');
const path = require('path');

// create folder
fs.mkdir(path.join(__dirname, '/myfolder'), {}, err => {
    if (err) throw err
    console.log('The new folder was created successfuly!')
});

// create file
fs.writeFile(path.join(__dirname, '/myfolder', 'myfile.txt'), 'Hey there!', err =>{
    if (err) throw err
    console.log('The file was successfully created !')
})

// read file
fs.readFile(path.join(__dirname, '/myfolder', 'myfile.txt'), '', (err,data) =>{
if (err) throw err
console.log('the content is: ' + data);
}
)

// rename file
fs.rename(
    path.join(__dirname, '/myfolder', 'myfile.txt'),
    path.join(__dirname, '/myfolder', 'newfile.txt'), 
    
    err =>
    
    {   if (err) throw err;
        console.log('the file was updated!');
         }
)