const os = require('os');


//platform
console.log('The os platform is: ' + os.platform());

//CPU architecture
console.log('The os architecture is: ' + os.arch());

// CPU Core Info
console.log( os.cpus());

// Free memory
console.log('the free memory is: ' + os.freemem());

//Total memory
console.log('the total memory is: ' + os.totalmem());

// home dir
console.log('the home dir is: ' + os.homedir());