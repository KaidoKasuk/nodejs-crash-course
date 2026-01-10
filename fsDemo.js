// import fs from "fs";
import fs from "fs/promises";

// ---------//fsDemo.js to activate---------//
// //readFile() -callback, node

// fs.readFile("./text.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
//-----------------------------//
// //readFileSync() - synchronous version stops code when reading file
// const data = fs.readFileSync("./text.txt", "utf8");
// console.log(data);
//-----------------------------//

// fs.readFile("./text.txt", "utf8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
//-----------------------------//

// //readFile() -async/await

const readFile = async () => {
  try {
    const data = await fs.readFile("./text.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
// readFile();
//-----------------------------//
const writeFile = async () => {
  try {
    await fs.writeFile("./text.txt", "Hello, I am writing this into the file");
    console.log("file written to...");
  } catch (error) {
    console.log(error);
  }
};

//appendFile()

const appendFile = async () => {
  try {
    await fs.appendFile("./text.txt", "\n This is a appended text");
    console.log("File appended to...");
  } catch (error) {
    console.log(error);
  }
};

writeFile();
appendFile();
readFile();
