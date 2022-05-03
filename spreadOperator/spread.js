
let person = {
    fname : "Mukesh",
    lname : "kumar",
    age : 23
}

let personCopy = {...person}                    // to copy the object
console.log("personCopy",personCopy);

let address = {
    pincode : 123456,
    city : "Bangalore"
}

// to combine 2 objects into one
let personAddress = {...person,...address}              // to copy and merge two objects
console.log("personAddress", personAddress);

console.log("====================================");

//for array
let arr1 = [10,20,30,40,50];
let arr1Copy = [...arr1];                               // to copy the array
console.log("arr1Copy",arr1Copy);

console.log("====================================");
let arr2 = [10,20,30,40,50];
let arr3 = [100,200,300,400,500];
let arr2Arr3Copy = [...arr2,...arr3];               // to copy and merge two arrays
console.log("arr2Arr3Copy",arr2Arr3Copy);