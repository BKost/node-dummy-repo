const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data recieved user: ${name} and id:${id}`);
});

customEmitter.on("response", () => {
  console.log(`data recieved secod`);
});

customEmitter.emit("response", "john", 34);
