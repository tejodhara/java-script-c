var fruits = ["apple","mango","banana","orange","grapes"]
fruits.forEach((value,index)=>{
    console.log(`fruits at ${index} : ${value}`);
})

var car = ["BMW","range rover","ford","fiet","honda"]
car.forEach((value,index)=>{
    console.log(`car at ${index} : ${value}`);
});

//2
var books = [
    {
        title: "JavaScript",
        price: 1700
    },
    {
        title: "Java",
        price: 700
    },
    {
        title: "Python",
        price: 1000
    },
    {
        title: "C#",
        price: 900
    }
]
books.forEach((value,index) =>{
    if(value.price > 1000){
        console.log(`greater than thousand ${value.title}`)
    }
});

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

// indexOf()
var arr2 = [10,20,30,40,50,60]
var x=50
if(arr2.indexOf(x)>0){
    console.log(arr2.indexOf(x))
}else{
    console.log("element is not present")
}


// join
var arr3 = [10,20,30,40]
var join =arr3.join("-")
console.log("arr3",join)

// to reverse a string
var str = "hello"
var splitStr = str.split("").reverse().join("")
console.log(splitStr)

//map()
var bikes = ["re100","bullet","jawa","norton","rajdoot","rd350"]
bikes.map((value,index)=>{
    return console.log(`bikes at ${index}: ${value}`)
});

var num2= [100,200,300,400,500];
// num2.map((val,idx)=>{
//     return console.log(val + 20);
// });

// console.log("num2",num2);

//filter
var filterNum=num2.filter((value,index)=>{
        return value>200
});
console.log("filterNum",filterNum)

