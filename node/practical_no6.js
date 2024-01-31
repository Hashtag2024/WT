//lmport events module
const events =require('events');

//create an event emitter object
const eventEmitter = new events.EventEmitter();

//
eventEmitter.on("connection", handleConnectionEvent);

function handleConnectionEvent() {
    console.log("Connection Made!");
}

eventEmitter.emit ("connection");
eventEmitter.emit("connection");
eventEmitter.emit("connection");
eventEmitter.emit("connection");

console.log("End of Program");