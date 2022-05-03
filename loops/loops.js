//for of loop for array
var cars =["audi","ford","MG","KIA","Maruti","bentley","ferrari",,,]

for(var car of cars){
    console.log(`car: ${car}`)
}

console.log("===================")
//for in loop for object    //for in loop ignores empty spaces
var car={
    color: "red",
    brand: "kia",
    model: 2022
}
for(var key in car){
    console.log(`${key} : ${car[key]}`)
}

console.log("===================")
var cars1 =["audi","ford","MG","KIA","Maruti","bentley","ferrari",,,]
for(var index in cars1 ){
    console.log(`car at ${index}: ${cars1[index]}`)
}