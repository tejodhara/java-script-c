// console.log(`================1.  =========================`);
// var car
console.log(`================2. Prime Number =========================`);
// named function
console.log("Named function");
var num = 3, count =0;
function prime(num){
    for(var i = 2; i<num; i++){
        if(num%i==0){
            count++;
        }
    }
    return count==0? console.log(`${num} is Prime Number`): console.log(`${num} is not Prime Number`);
}
prime(num);

//anonymous function
console.log("anonymous function");
var pri=function (num){
    for(var i = 2; i<num; i++){
        if(num%i==0){
            count++;
        }
    }
    return count==0? console.log(`${num} is Prime Number`): console.log(`${num} is not Prime Number`);
};
pri(num)
console.log(`================3. Bubble Sort =========================`);

console.log(`======4. String reverse =========`);
 // named function
 console.log("Named function");
 var str = "hello"
 function strRev(str){
     return str.split("").reverse().join("");
 }
 console.log(`String reverse of ${str} is ${strRev(str)}`);

//anonymous function
console.log("anonymous function");
var str1 = "tejodhara"
var fact1 = function (x){
    return str1.split("").reverse().join("");
};
console.log(`String reverse of ${str1} is ${strRev(str1)}`);

//IIFE
console.log("IIFE");
var str2 = "venkata";
(function (str) {
    var s = str.split("").reverse().join("");
    return console.log(`String reverse of ${str2} is ${s}`);
})(str2);


//Array function 
console.log("Array function");
var str3 = "sai";
var strRev1 = (str3)=>{
    return str3.split("").reverse().join("");
}
console.log(`String reverse of ${str3} is ${strRev1(str3)}`);

//Array function  
console.log("Array function");
var str4 = "chunduri"
var fact4 = (str)=>{
    var s1 = str.split("").reverse().join("");
    console.log(`String reverse of ${str} is ${s1}`);
}
fact4(str4);
console.log(`=========================================`);
// factorial
console.log(`===================7. factorial======================`);
    // named function
console.log("Named function");
var x = 5
var f = 1
function fact(x){
    for(var i =1;i<=x;i++){
        f= f*i
    }
    return f
}
console.log(`factorial of ${x} is ${fact(x)}`);


    //anonymous function
console.log("anonymous function");
var f1=1
var fact1 = function (x){
    for(var i =1;i<=x;i++){
        f1= f1*i
    }
    return f1
};
console.log(`factorial of ${x} is ${fact1(x)}`);

//IIFE
console.log("IIFE");
var f2 = 1;
(function (y) {
    for(var i = 1;i<=y;i++){
        f2 = f2*i
    }
    return console.log(`factorial of ${y} is ${f2}`);
})(x);


//Array function 
console.log("Array function");
var f3 = 1
var fact3 = (x)=>{
    for(var i =1;i<=x;i++){
        f3= f3*i
    }
    return f3
}
console.log(`factorial of ${x} is ${fact3(x)}`);

//Array function  
console.log("Array function");
var f4 = 1
var fact4 = (x)=>{
    for(var i =1;i<=x;i++){
        f4= f4*i
    }
    console.log(`factorial of ${x} is ${f4}`);
}
fact4(x);

console.log(`===================6======================`);
var maxVal = 50;
console.log("random number",Math.round(Math.random()*maxVal+1));

console.log(`===================10. Hoisting======================`);
//Hoisting
var a= 10;
function demo(){
    console.log("a ", a);
    var a = 20;
}
demo()

var wish = function(){
    console.log("het good morning");
};
wish();      //since wish method is declared in a variable it will get undefined when we call the wish() before declaring

greet();
function greet(){
    console.log("greetings of the day");
}


console.log(`===================14======================`);
//14. What happens in below scenarios const n = [10, 20,30 ] const n1 = n; n.slice(0) 

const n = [10,20,30]
const n1= n;
console.log(n.slice(0))
console.log(`===================15======================`);
//15.Give five examples for array methods a. forEach b. push с. pop d. shift e. unshift f. includes g. splice h. slice i. isArray
// push ()
var arr1 = [1,2,5,7,9,10]
console.log("arr1 before push", arr1)
var addNum = arr1.push(20);
var addNum = arr1.push(30, 40);
console.log("arr1 after push", arr1)
console.log("addNum", addNum)

// pop()
var removeElement =arr1.pop();
console.log("removeElement", removeElement);
console.log("after pop",arr1)

// unshift()
var addElementToFirst = arr1.unshift(50,66,88);
console.log("addElementToFirst", addElementToFirst);
console.log("after upshift",arr1);

// shift()
var removeElementAtFirst = arr1.shift();
console.log("removeElementAtFirst", removeElementAtFirst);
console.log("after shift",arr1);

// includes
var mobNum = [1,2,3,4,5,6,6,7,8,9]
var d = mobNum.includes(5)
console.log(d);

// splice
var fruits1 = ["apple","mango","banana","orange","grapes"]
var removeELement1 = fruits1.splice(1,1,"kiwi","lichi")

console.log("fruits1",fruits1)
console.log("removeELement1",removeELement1)
console.log("===========================")

// slice()
var fruits2 = ["apple","mango","banana","orange","grapes"]
var slicedElement = fruits2.slice(1,2)
console.log("slicedElement",slicedElement)

//isArray
var fruits2 = ["apple","mango","banana","orange","grapes"]
console.log(Array.isArray(fruits2))