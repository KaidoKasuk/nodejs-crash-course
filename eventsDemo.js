import { error } from "console";
import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log("Hello " + name);
}

function goodbyeHandler(name) {
  console.log("Goodbye " + name);
}

// register event listeners
myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodbyeHandler);

//emit events

myEmitter.emit("greet", "jhon");
myEmitter.emit("goodbye");
myEmitter.on("error", (err) => {
  console.log("an error occured:", err);
});

//simulate error
myEmitter.emit("error", new Error("something went wrong"));
