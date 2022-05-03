var car1= {
    name :"maruti",
    price : 400000,
    color: "white"
}
var car2= {
    name :"ford",
    price : 600000,
    color: "white"
}
var car3= {
    name :"audi",
    price : 1000000,
    color: "white"
}
var car4= {
    name :"kia",
    price : 800000,
    color: "white"
}
var car5= {
    name :"bentley",
    price : 1000000,
    color: "white"
}

function cars(car){
    return "car name is "+car.name;
}
console.log(cars(car1))
console.log(cars(car2))
console.log(cars(car3))
console.log(cars(car4))
console.log(cars(car5))


//with new keyword
console.log("With new Keyword")
var bike1 = new Object();
bike1.name ="yamaha";
bike1.price =50000;
bike1.color = "white";

var bike2 = new Object();
bike2.name ="dokati";
bike2.price =40000;
bike2.color = "black";

var bike3 = new Object();
bike3.name ="honda";
bike3.price =60000;
bike3.color = "red";

var bike4 = new Object();
bike4.name ="hero";
bike4.price =40000;
bike4.color = "blue";

var bike5 = new Object();
bike5.name ="avenger";
bike5.price =50000;
bike5.color = "orange";

function bikes(bike){
    return "bike name is "+bike.name;
}
console.log(bikes(bike1))
console.log(bikes(bike2))
console.log(bikes(bike3))
console.log(bikes(bike4))
console.log(bikes(bike5));

console.log("=======================")
var carS = {
    name : "dokati",
    price: 40000,
    color: function (){
        return "red"
    }
}
for(var i=0;i<carS.)