const startStr = "this is my new string";

console.log("Before", startStr);

const strIndexOf = startStr.indexOf('my');
const strSubstr = startStr.substring(0, 8);
const strInc = startStr.includes("this");

console.log("After - strIndexOf:", strIndexOf);
console.log("After - strSubstr:", strSubstr);
console.log("After - strInc:", strInc);
console.log("----------------------");

const startArr = ["this", "is", "a", "new", "array"];

console.log("Before", startArr);

const reverseArr = startArr.reverse();

console.log("After - reverseArr:", reverseArr);

const sortedArr = startArr.sort();

console.log("After - sortedArr:", sortedArr);

const arrFill = startArr.fill(0, 0, 3);

console.log("After - arrFill:", arrFill);