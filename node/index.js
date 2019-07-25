const Logger = require('./logger.ts');
const logger = new Logger();

logger.on('message', data => console.log(data));
logger.log('Howdiiiiiie!');



/* const Person = require('./person');
const p = new Person('Jacke', 24);
p.greeting(); */
