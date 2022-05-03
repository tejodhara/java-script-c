let person={
    fname : "Sai",
    lname : "CTV",
    address : {
        pincode : 123456,
        area    : "BTM"
    }
}



// to take a deep copy
// to stringify the object

let stringifiedObject = JSON.stringify(person)                  // JSON.stringify will convert object to string
console.log("stringifiedObject",stringifiedObject);

let jsObject = JSON.parse(stringifiedObject)                    // JSON.parse will conver string to object
// console.log("jsObject",jsObject);

person.fname = "Tejodhar"
person.address.area = "Kormangala"

console.log("person",person);
console.log("after deep copy",jsObject);