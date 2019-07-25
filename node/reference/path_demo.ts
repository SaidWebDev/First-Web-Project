const p =require('path');

// file basename
console.log('The basename of the file is ' + p.basename(__filename));

// dir basename
console.log('The basename of the dir is ' + p.basename( __dirname));

// file extensiom
console.log('th file extension is '+ p.extname(__filename));

// create a path object
console.log(p.parse(__filename));