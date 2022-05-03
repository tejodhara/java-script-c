var fruits = ["apple","orange","banana","dragon","mango"]

for(var i=0; i<fruits.length; i++){
    console.log(`fruits at index ${i} : ${fruits[i]}`)      //template literal `
}

/*console.log("=======================================")    // print in reverse order  
for(var i= fruits.length-1; i>=0; i--){     
    console.log(`fruits at index ${i} : ${fruits[i]}`)      //template literal `
}*/

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
for(var i = 0; i<books.length; i++){
    if(books[i].price>1000){
        console.log(books[i].title)
    }else{
        console.log("price not above 1000")
    }
}
