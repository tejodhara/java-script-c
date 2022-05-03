// object destructuring
//example 1
let person= {
    fname  : "Ajay",
    lname  : "K",
    age    : 18
}

let {fname,lname} = person;
console.log("==========================================");
console.log("fname",person.fname);
console.log("fname",fname);
console.log("fname",lname);

console.log("==========================================");
let person1= {
    fname  : "Vijay",
    lname  : "K",
    age    : 18
};
// alias name of fname is firstName
let {fname:firstName} = person1;
console.log("firstName",firstName);

console.log("==========================================");

//example 2
let personDate = {
    eid : 123,
    salary : 120000,
    dept : "dev",
    address : {
        city : "Bangalore",
        pincode : 560022
    },
    hobbies : ["dancing","singing","reading"]
};

// let {city,pincode} = personDate.address;
let {address:{city,pincode}} = personDate;
let {hobbies} = personDate;
let [hobby1, hobby2,hobby3,hobby4] = personDate.hobbies;    //in distrucing it will not allow numbers 

console.log("city",city);
console.log("hobbies", hobbies[2]);
// console.log("hobby2",hobby2);


// array destructuring
let hobbies1 = ["sleeping","drawing","bird watching", "coding"];
let [hob1,hob2,hob3] = hobbies1;
console.log("hob1", hob1);