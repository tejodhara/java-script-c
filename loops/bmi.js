var weight= 80
var height = 1.78
var bmi = weight/ (height*height)
// var totalWeight = 
// bmi<=18.5 ? "UnderWeight"
// :(bmi>18.5 && bmi<=24.5)? "Healthy" 
// :(bmi>=25.0 && bmi<=29.9) ? "OverWeight" 
// :(bmi>=30)? "Obase" : "enter valid weight";
// console.log(`${totalWeight}`)



if(bmi<=18.5){
    console.log("UnderWeight")
} else if(bmi>18.5 && bmi<=24.5){
    console.log("Healthy")
} else if(bmi>=25.0 && bmi<=29.9){
    console.log("OverWeight")
}else if(bmi>=30){
    console.log("Obase")
}else {
    console.log("enter valid weight")
}