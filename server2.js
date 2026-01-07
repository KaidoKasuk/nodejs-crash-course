import { createServer } from "http";
import { json } from "stream/consumers";
const PORT = process.env.PORT;
const users = [
  {
    id: 1,
    name: "Juhan Tamm",
  },
  {
    id: 2,
    name: "Villu Lugu",
  },
  {
    id: 3,
    name: "Giga Chad",
  },
];

const server = createServer((req, res) => {
  //ROUTER
  if (req.url === "/api/users" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(users));
    res.end();
  } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/")[3];
    const user = users.find((user) => user.id === parseInt(id));
    res.setHeader("Content-Type", "application/json");

    if (user) {
      res.write(JSON.stringify(user));
      res.end();
    } else {
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 404;
      res.write(JSON.stringify({ message: "user not found" }));
      res.end();
    }
  } else {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "route not found" }));
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
