function first(){
    setTimeout(function(){
        console.log("first function");
    },1000);
    console.log("test your brain")
}

function second(){
    console.log("second function");
}

function third(){
    setTimeout(function(){
        console.log("third function");
    },0);
    console.log("test your brain again")
}

first();
second();
third();