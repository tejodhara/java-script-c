//rest operator
function sum(...num){                       // ...num is a rest operator 
    let sum = 0;
    for(let i=0; i<num.length;i++){
        sum = sum+num[i];
    }
    console.log("sum ",sum);
}
sum(10,20,30,40,50,60,60);

// default operator
function greet(name="TestYantra"){              // here TestYantra acts as a default value
    console.log("Hello ",name);
}
greet("Ajay");