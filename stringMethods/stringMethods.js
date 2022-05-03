let str = "hello"

//toUpperCase
let upperCase = str.toLowerCase();
console.log(upperCase);

// toLowerCase
let lowerCase = str.toLowerCase();
console.log(lowerCase);

// charAt
let charAt = str.charAt(4);
console.log(charAt);

// indexOf
let indOf = str.indexOf("e");
console.log(indOf);

//split
let split = str.split("");
console.log(split);

// replace
let replace = str.replace("e","f");
console.log(replace);

// replaceAll
let replaceAll = str.replaceAll("l","m");
console.log(replaceAll);

//includes
let includes = str.includes("o");
console.log(includes);          //true            //returns boolean value

// trim
let note = "    hello, welcome to techno elevate        ";
let trim = note.trim();
console.log(trim);

// trimRight
let tirmRight = note.trimRight();
console.log(tirmRight);

// trimLeft
let trimLeft = note.trimLeft();
console.log(trimLeft);