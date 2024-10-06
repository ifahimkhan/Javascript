const EventEmitter = require('events');

class TodoServer extends EventEmitter {
    constructor(client) {
        super();

        this.tasks = {};
        this.taskId = 1;

        process.nextTick(() => {
            this.emit(
                'response',
                'Type a command (help to list commands)'
            );
        });

        client.on('command', (cmd, args) => {
            switch (cmd) {
                case 'help':
                    this.help()
                    break;
                case 'ls':
                    this.ls()
                    break;
                case 'add':
                    this.add(args)
                    break;
                case 'delete':
                    this.delete(args)
                    break;
                default:
                    this.emit('response', 'Unknown command');
            }
        });
    }

    help() {
        this.emit('response', `Available commands: 
          add task
          ls
          delete :id
         `)
    }

    ls() {
        this.emit('response', `Tasks: \n${this.#tasksString()}`)
    }

    add(args) {
        const newTask = args.join(' ')
        this.tasks[this.taskId] = newTask;
        this.emit('response', `Added Task ${this.taskId}`)
        this.taskId++
    }

    delete(args) {
        delete (this.tasks[args[0]]);
        this.emit('response', `Deleted task id ${args[0]}`)
    }

    #tasksString() {
        return Object.keys(this.tasks).map((key) => {
            return `${key}: ${this.tasks[key]}`
        }).join('\n');
    }
}

module.exports = (client) => new TodoServer(client)
