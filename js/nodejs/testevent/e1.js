import event from "events";

let eventEmitter = new event.EventEmitter();

eventEmitter.on("test-event",()=>{
    console.log("test-event handled....");
});
eventEmitter.on("error",()=>{
    console.log("Error event handled...");
});

eventEmitter.on("finish",()=>{
    console.log("Finish event handled..");
});
eventEmitter.on("data",()=>{
    console.log("Data event handeld...");
});
eventEmitter.on("end",()=>{
    console.log("End event handled....");
});

eventEmitter.emit("test-event");
eventEmitter.emit("error");
eventEmitter.emit("data");
eventEmitter.emit("end");
eventEmitter.emit("finish");
eventEmitter.emit("finish");
eventEmitter.emit("finish");
