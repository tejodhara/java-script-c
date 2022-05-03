//named function
function sum(n1,n2){
    return n1+n2;
}
var resultSum = sum(10,20)
console.log("named function", resultSum);

//anonymous function

var prod = function(n1,n2){
    return n1*n2
};
var mul = prod(10,20)
console.log("anonymous", mul);

//IIFE => immediately invoked function expression or self invoked function

(function (n1,n2){
    return console.log("hello", n1+n2);
})(10,20);


//Arrow function
//single line return will be added by js engine
var sum = (n1,n2) => n1+n2

//multiline code we need to add return
var divide = (n1,n2) =>{
    return n1/n2;
};
var s = sum(10,20);
var d = divide(10,20);
console.log("sum value ",s);
console.log("divide value ",d);

//in case of one parameter paranthesis is optional

var greet = name =>console.log("Welcome to team ", name);
greet("techno")

//if no parameter then paranthesis is mandatory
var printTenNumbers = () =>{
    for(var i=1;i<10;i++){
        console.log(i);
    }
}
printTenNumbers();


//nested function
function findSquare(n1) {
    return function(){
        console.log("square of num ",n1*n1);
        return function (){
            return console.log("hi num is ",n1);
        };
    };
}
findSquare(10)()()

//callBack functions
function test(callBack){
    console.log("test function")
    callBack()
}

function sample(){
    console.log("sample function")
}
test(sample);

/*function test1(callBack){
    var x=10                                //i tried
    var y=20
    var z=x+y;
    callBack(z)
}
function sample1(x){
    console.log(Math.sqrt(x))
}
test1(sample1)*/

