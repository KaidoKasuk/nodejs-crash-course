import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";

//Get current path
//when using ES modules u need to make these:
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename, __dirname);

const PORT = process.env.PORT;
const server = http.createServer(async (request, response) => {
  try {
    //check if GET request
    if (request.method === "GET") {
      // this is router
      let filePath;
      if (request.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
      } else if (request.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        throw new Error("Not found");
      }

      const data = await fs.readFile(filePath);
      response.setHeader("Content-Type", "text/html");
      response.write(data);
      response.end();
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    response.writeHead(500, { "content-type": "text/plain" });
    response.end("server error");
  }

  //   response.setHeader("content-Type", "text/html");
  //   response.statusCode = 404;
  //   response.writeHead(200, { "content-type": "application/json" });
  // console.log(request.url);
  // console.log(request.method);

  //   response.write("hello world");
  // response.end("hello world");
  //   response.end(JSON.stringify({ message: "server error" }));
  // required for server
  // response.writeHead(200, { "content-type": "text/html" });
  //   response.end("<h1>hello world</h1>");
});

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
