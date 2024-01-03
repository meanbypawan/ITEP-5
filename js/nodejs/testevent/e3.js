import event from "events";
import promptSync from "prompt-sync";

let prompt = promptSync({sigint: true});

let eventEmitter =  new event.EventEmitter();

let n = prompt("Enter 1 for add  Enter 2 for sub Enter 3 for multiply : ");

eventEmitter.on("add",(a,b)=>{
    console.log("Addition..."+(a+b));
});

eventEmitter.on("sub",(a,b)=>{
    console.log("Subtraction...."+(a-b));
});

eventEmitter.on("mult",(a,b)=>{
    console.log("Multiplication....."+(a*b));
});

eventEmitter.on("error",()=>{
    console.log("Invalid choice...");
});
let n1 = prompt("Enter 1st value : ")*1;
let n2 = prompt("Enter 2nd value : ")*1;
switch(n){
  case "1": eventEmitter.emit("add",n1,n2);break;
  case "2": eventEmitter.emit("sub",n1,n2);break;
  case "3": eventEmitter.emit("mult",n1,n2);break;
  default: eventEmitter.emit("error");
}
