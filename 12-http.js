const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home");
    return;
  }

  if (req.url === "/about") {
    res.end("about us");
    return;
  }

  res.end(`<h1>Oops!</h1>
   <p>no such page</p>
   <a href="/" >home</a>`);
});

server.listen(5000, () => {
  console.log("Server running");
});
