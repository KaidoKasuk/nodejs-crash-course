import http from "http";
const PORT = 8000;
const server = http.createServer((request, response) => {
  //   response.setHeader("content-Type", "text/html");
  //   response.statusCode = 404;
  //   response.writeHead(200, { "content-type": "application/json" });
  response.writeHead(200, { "content-type": "text/html" });

  //   response.write("hello world");
  // response.end("hello world");
  response.end("<h1>hello world</h1>");
  //   response.end(JSON.stringify({ message: "server error" }));
});

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
