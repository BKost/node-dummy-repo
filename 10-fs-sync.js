const { readFileSync, writeFileSync } = require("fs");

console.log("START");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/subfolder/test.txt", "utf8");

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);

console.log("DONE WITH THIS TASK");
console.log("STARTING NEXT ONE");
