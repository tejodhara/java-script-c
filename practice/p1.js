let n=[1,2,3,4,5,6,7,65]
console.log("================= FOREACH  =====================");
let m= n.forEach(function f1(value,index,arr){
    return value*2
})
console.log(m);
console.log(n)

console.log("=================  MAP  =====================");
let x= n.map(function f1(value,index,arr){
    return value*2
})
console.log(x);
console.log(n)

console.log("============ for ==================");
for(var i=0;i<n.length;i++ ){
    console.log(n[i])
}

console.log("============= for of =================");
for(let y of n){
    console.log(y);
}

console.log("============ for in ==============");
for(let z in n){
    console.log(z);
}

console.log("==========event ============="); 
// document.getElementById('demo').innerHTML= ;
console.log("test \t");

console.log("==========event ============="); 
var b = "hello world"
console.log(b.toUpperCase());

console.log("========== string methods ============="); 
var c= 'Tejodhara Sai'
console.log(c.length);              //13
console.log(c.toUpperCase())        //TEJODHARA SAI
document.getElementById("demo").innerHTML = c.slice(0,4)    //Tejo
console.log(c.slice(-5,-1));      //a sa
console.log(c.substring(5,13));  //hara sai   
console.log(c.substr(5,5));     //hara
console.log(c.substr(-4));      // Sai

console.log(c.replace("T","j"));    // replace method is case sensitive so if you write small t will thorugh error
console.log(c.replace(/t/i,"j"));   // to make case insensitive we use /i at last
console.log(c.replace(/a/g,"j"));   // to replace all the elements in a sentance    //Tejodhjrj Sji

//concat
let t1= "hello", t2= "world"
console.log(t1.concat(" ",t2));     // to join two stings

// trim
let x1 = "   hello      "
console.log(x1);
console.log(x1.trim());

// string padding
// padStart()  -- The padStart() method pads a string with another string
let text = "5"
console.log(text.padStart(5,"x"));      // xxxx5
console.log(text.padEnd(5,"x"));        // 5xxxx

// charAt(position)
console.log(t1.charAt(0));          //h

// charCodeAt()
console.log(t1.charCodeAt(0));    //104 (assci value of 'h')

// property access
let text1 = "HELLO WORLD"
console.log(text1[0]);      //H

//split()
console.log(text1.split(","));

// string indexOf()
let str ="Please locate where 'locate' occurs!"
console.log(str.indexOf("locate"));     //7
console.log(text1.indexOf("O"));        //4

// lastIndexOf()  -->The lastIndexOf() method returns the index of the last occurrence of a specified text in a string
console.log(str.lastIndexOf("locate"));     //21

// search() --> The search() method searches a string for a specified value and returns the position of the match:
console.log(str.search("locate"));      //7

//match() -->The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
console.log(str.match(/lo/g));      //lo, lo


console.log("========== number methods ============="); 
//toExponential() --> returns a string, with a number rounded and written using exponential notation.
let x2 = 9.656
console.log(x2.toExponential(2));       //9.66e+0

// toFiexed() --> returns a string, with the number written with a specified number of decimals
console.log(x2.toFixed(4));     //9.6560

// toPrecision() returns a string, with a number written with a specified length
console.log(x2.toPrecision(3)); // 9.66

let x3 = [1,2,3,4,5,9,7]
console.log(x3.max_value);

console.log("========== Looping Array Elements ============="); 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text2 = "<ul>";
for (let i = 0; i < fLen; i++) {
  text2 += "<li>" + fruits[i] + "</li>";
}
text2 += "</ul>";
document.getElementById("demo").innerHTML = text2;

console.log("=================================================");
// var li = []
// for(let i=0;i<4;i++){
//     li.push(`gmail: gmail${i}`)
// }
// console.log(li);
let li = []
let li1 = ["gmail1","gmail2","gmail3","gmail4"]
for( index of li1){
    li.push({"gmail": index})
}
console.log(li);

console.log("=================================================");
let num = 5, fa=1
function fact(num){
    for(let i=1;i<=num;i++){
        fa=fa*i
    }

    return fa
}
console.log(fact(num));

function pri(num){
    for(let i=2;i<num;i++){
        
    }
}
