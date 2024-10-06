const fs = require('fs');
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('fileRead', (data) => {
    console.log('File reading complete! File contents:');
    console.log(data);
});

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    
    eventEmitter.emit('fileRead', data);
});
