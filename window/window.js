var str = "Hello";
let name = 123;
console.log("str",str);
console.log("window",window);
console.log("typeof",typeof name);

function some(){
    console.log("some function");
}
some();

// alart
// let alart = window.alert("Hello welcome back");

// confirm
// let isElegible = window.confirm("Are u above 18")
// if(isElegible) {
//     console.log("Elegible");
// }
// else{
//     console.log("not Elegible");
// }


//prompt
// let age = window.prompt("Enter your age")

// if(age>18){
//     window.open("https://www.flipkart.com/")
// }
// else
// {
//     window.open("https://www.firstcry.com/")
// }

console.log("location",location);
console.log("history",history);
console.log("navigator",navigator);


// current geo locator

// console.log(navigator.geolocation.getCurrentPosition())

// var x = document.getElementById("gerloc");
// function getLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//       x.innerHTML = "Geolocation is not supported by this browser.";
//     }
//   }
  
//   function showPosition(position) {
//     x.innerHTML = "Latitude: " + position.coords.latitude +
//     "<br>Longitude: " + position.coords.longitude;
//   }