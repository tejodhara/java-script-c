// immutable

// primitive data types (primitive datatypes have its own memory location)

var name1 = "HunnyBunny"
var nameCopy = name1

console.log("name1",name1);
console.log("nameCopy",nameCopy);
console.log("====================================");

var name1 = "Rocky"
console.log("name1",name1);
console.log("nameCopy",nameCopy);
console.log("====================================");

// mutalbe
// object -> reference data type

const person = {
    fname : "Jonny",
    lname : "Bravo",
    age : 18
};
const personCopy = person;
console.log("person",person);
console.log("personCopy",personCopy);
console.log("====================================");

person.fname = "vicky";
console.log("person",person);
console.log("personCopy",personCopy);

console.log("====================================");

let car = {
    color : "white",
    model : 2022
}
//to make a copy of obj
// object.assign will make a shallow copy

let carCopy = Object.assign({},car);
car.color = "red"

console.log("car",car);
console.log("carCopy",carCopy);

console.log("====================================");

// array
//array example mutable
let arr1 =[10,20,30,40]
console.log("arr1",arr1);
let arr1Copy = arr1;
arr1.push(50)
console.log("arr1",arr1);
console.log("arr1Copy",arr1Copy);

console.log("====================================");

//array example immutable
let arr3 = [10,20,30,40]
console.log("arr3",arr3);
let arr3Copy = arr3.slice(0);
arr3.push("mango")
console.log("arr3",arr3);
console.log("arr3Copy",arr3Copy);