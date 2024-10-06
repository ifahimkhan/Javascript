const readline = require('readline');
const EventEmitter = require('events');

const client = new EventEmitter();
const server = require('./server')(client); 

server.on('response', (response) => {
    process.stdout.write('\u001B[2J\u001B[0;0f') 
    process.stdout.write(response);
    process.stdout.write(`\n${cursorPrompt}`);
});

const cursorPrompt = 'todoApp> '; 

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout, 
    prompt: cursorPrompt,
});


r1.on('line', (input) => {
    [cmd, ...args] = input.trim().split(' ');
    client.emit('command', cmd, args);
});