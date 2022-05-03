//Hoisting
var a= 10;
function demo(){
    console.log("a ", a);
    var a = 20;
}
demo()

var wish = ()=> console.log("het good morning");
wish();         //since wish method is declared in a variable it will get undefined when we call the wish() before declaring

greet();
function greet(){
    console.log("greetings of the day");
}