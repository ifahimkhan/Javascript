const EventEmitter = require('events');

class TaskTermServer extends EventEmitter {
    constructor(client){
        super(); 
        
        this.tasks = {};
        this.taskId = 1;

        process.nextTick(() => {
            this.emit(
              'response',
              'Type a command (help to list commands)'
            );
        })
    }
}
module.exports = (client) => new TaskTermServer(client)
