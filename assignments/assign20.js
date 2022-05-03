console.log("================1. immutable and mutable====================");
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

console.log("====================2.======================");
console.log("hasOwnProperty");
function checkProperty() {
    let exampleObj = {};
    exampleObj.height = 100;
    exampleObj.width = 100;

    // Checking for existing property
    result1 = exampleObj.hasOwnProperty("height");

    // Checking for non-existing property
    result2 = exampleObj.hasOwnProperty("breadth");

    // document.querySelector(".outputProperty").textContent = result1; 
    // document.querySelector(".outputNonProperty").textContent= result2;
    console.log(result1);
    console.log(result2);
}


console.log("===============            =====================");
var name1 = "HunnyBunny"
var nameCopy = name1

console.log("name1",name1);
console.log("nameCopy",nameCopy);
console.log("====================================");

var name1 = "Rocky"
console.log("name1",name1);
console.log("nameCopy",nameCopy);
