var per = 150
/*if(per>=0 && per<=100){
    if(per > 70){
        console.log("Fist class with distinction")
    } else if (per > 30) {
        console.log("Pass")
    } else {
        console.log("fail")
    }
}*/

/*
var percentage= per>=0 && per<=100 ? (per > 70 ? "First class": (per > 30 ? "pass":"fail") ):"wrong percentage"
console.log(percentage)*/

var percentage = 20
typeof percentage !== "number" || percentage > 100 || percentage < 0 
    ? console.log("Invalid percentage")
    : percentage > 70
    ? console.log("FCD")
    :percentage >= 30
    ? console.log("PASS")
    : console.log("FAIL")

//  == vs ===
/* == compares the values
   === compares the values as well as datatypes */
var data = "12"
var num = 12
if(data== num){
    console.log("equal")
}else {
    console.log("not equal")
}


