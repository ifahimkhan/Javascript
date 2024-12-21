const EventEmitter = require('events');

let eventEmitter = new EventEmitter();
 
let event1= (msg) => {
    console.log("Message from event Listener 1: " + msg);
};
let event2 = (msg) => {
    console.log("Message from event Listener 2: " + msg);
};

eventEmitter.on('myEvent', event1);
eventEmitter.on('myEvent', event1);
eventEmitter.on('myEvent', event2);
 
eventEmitter.removeListener('myEvent', event1);
 
eventEmitter.emit('myEvent', "Event occurred");

eventEmitter.removeAllListeners('myEvent');

eventEmitter.emit('myEvent', 'Event occurred');
