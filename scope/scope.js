console.log(a);
var a= 10;              // global scope

function text(){
    var a = 20          // local scope or function scope
    console.log(a);     //20
}
text();
console.log("=======================================");

for(var i =0; i<4;i++){
    console.log(i);
}
console.log("=======================================");
console.log(i);         //outSide the block scop

console.log("=======================================");
// es6 introduced
// let

let b = 20;

console.log("global", b);

function accessVariableLocal(){
    let b = 30;
    console.log("local ", b);
}
accessVariableLocal();
console.log("=======================================");

for(let j=0; j<4; j++){
    console.log(j);
}

console.log("=======================================");
// console.log(j);      //access j variable outside the block, we get error
console.log("=======================================");

let c= 33;
c =40;
console.log(c);

console.log("=======================================");
//const
const d = 55;
// d = 99;  //type error
// console.log(d);

function constVariable(){
    const d= 77;
    console.log(d);
}
constVariable();

// for(const k=0; k<4;k++){
//     console.log(k);             //it will print k =0 and gives error (TypeError: Assignment to constant variable.)
// }

const arr1 = ["mango", "lichi","grapes"]
arr1.push("dragon")
console.log(arr1);

//we can use the array mehtods but can't assign the value directly