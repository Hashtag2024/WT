// step 1 importing event
const events = require("events");
// step 2 creating an Event emitter object
const eventEmitter = new events.EventEmitter();
//write a function of event 1
function listnerNow() {
console.log("Event recevied by Listner Now");
}
//write a function of event 2
function listnerAfter
() {
console.log("Event recevied by Listner After");
}
// step 3 adding listener through addlistener or on
eventEmitter.addListener("write", listnerNow);
eventEmitter.on("write", listnerAfter);
// step 4 emiting event
eventEmitter.emit("write");
console.log(eventEmitter.listenerCount("write"));
// step 5 removing listener
eventEmitter.removeListener("write", listnerNow);
console.log("Listener Now is removed");
eventEmitter.emit("write");
console.log(eventEmitter.listenerCount("write"));
console.log("Program Ended");
