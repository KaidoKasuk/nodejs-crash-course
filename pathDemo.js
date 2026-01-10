import path from "path";
import url from "url";
// node pathDemo.js to run the file
const filePath = "./dir1/dir2/minu_failid/text.txt";

//basename() - text.txt

// console.log(path.basename(filePath));

//dirname() - ./dir1/dir2/minu_failid

// console.log(path.dirname(filePath));

//extname() - .txt

// console.log(path.extname(filePath));

//parse() -
// {
//   root: '',
//   dir: './dir1/dir2/minu_failid',
//   base: 'text.txt',
//   ext: '.txt',
//   name: 'text'
// }

// console.log(path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename);
console.log(__dirname);

//join()

//on mac and linux
//users/brad
//on win
// users\brad

const filePath2 = path.join(__dirname, "dir1", "dir2", "text.txt");
console.log(filePath2);

//resolve()
const filePath3 = path.resolve(__dirname, "dir1", "dir2", "text.txt");
console.log(filePath3);
