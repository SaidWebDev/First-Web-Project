const EventEmitter = require('events');

// create a class
class MyEmitter extends EventEmitter{};

// Init an object
const myEmitter= new MyEmitter();

//Event Listener
myEmitter.on('event', ()=> {
    console.log('An event was Fired! ');
}
)

//Init event
myEmitter.emit('event');
myEmitter.emit('event');




