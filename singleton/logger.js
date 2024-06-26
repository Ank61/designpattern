class Logger {

    constructor() {
        this.logs = [];
    }

    get count() {
        return this.logs.length;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        console.log(`${timestamp} - ${message}`);
    }

}

//problem
//// Within this file, we create a class called Logger. The idea is that we want our application modules to use
//  this logger class instead of using console log directly. This logger saves information about all of the logs
//   that are sent to it and it also logs each message with a timestamp. So once we create an instance of this
//   object we can use the log method, send it a message, and it will log the timestamp and the message to the
//    terminal as well as save information about that log.




//solution 1 
// class Singleton {
//     constructor() {
//         console.log("Checking............")
//         if (!Singleton.instance) {
//             console.log("Instance not found")
//             Singleton.instance = new Logger();
//         }
//         console.log("Instance  found")
//     }
//     getInstance() {
//         console.log("Redirecting...to constuctor")
//         return Singleton.instance;
//     }
// }

// module.exports = Singleton;

// solution 2 :
//That means that Node JS will automatically handle exporting the same instance of the logger to every other module that wants to consume it.
 module.exports = new Logger();

