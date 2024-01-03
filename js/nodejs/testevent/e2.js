import event from "events";

let eventEmitter = new event.EventEmitter();

eventEmitter.on("first",()=>{
    console.log("First.....");
});

eventEmitter.once("second",()=>{
    console.log("Second......");
});

eventEmitter.emit("first");
eventEmitter.emit("first");
eventEmitter.emit("second");
eventEmitter.emit("second");
eventEmitter.removeAllListeners("first");
eventEmitter.emit("first");