const path =require('path');

// file basename
console.log('The basename of the file is ' + path.basename(__filename));

// dir basename
console.log('The basename of the dir is ' + path.basename( __dirname));

// file extensiom
console.log('th file extension is '+ path.extname(__filename));

// create a path object
console.log(path.parse(__filename));