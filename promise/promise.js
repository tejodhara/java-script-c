let promiseExample = new Promise(function(resolve,reject){
    if(10>5){
        resolve("10 is greated than 5")
    }
    else{
        resolve("10 is not greated than 5")
    }
})

promiseExample
