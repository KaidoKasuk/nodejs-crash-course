// // console.log(process);

//module.exports to get it here
// const { generateRandomNumber, celciusToFahrenheit } = require("./utils.js");

// console.log(generateRandomNumber());

// console.log(celciusToFahrenheit(0));

//-------------------------ES modules-------------------------//
//package.json add type module

import { getPosts, getPostsLenght } from "./postController.js";
//OR import  getPosts, {getPostsLenght } from "./postController.js";

console.log(getPostsLenght());
console.log(getPosts());
