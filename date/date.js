let todaysDate = new Date()
console.log("todaysDate",todaysDate);

//future date
// month starts from 0
let futureDate = new Date(2050,10,11,12,08,33 )
console.log("futureDate",futureDate);


// date form can be used
let someDate = new Date("June 10 2010");
console.log("someDate",someDate);

// date calculated from jan 1, 1970 
let timeInMilli = new Date(43565768);
console.log("timeInMilli",timeInMilli);

//
console.log(todaysDate.getFullYear());
console.log(todaysDate.getMonth());
console.log(todaysDate.getDay());
console.log(todaysDate.getHours());
console.log(todaysDate.getMinutes());
console.log(todaysDate.getSeconds());