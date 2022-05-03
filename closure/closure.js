function outer(num){
    let n1 = num;
    function inner(){
        let val =20;
        let total = n1+val;
        console.log("total", total);
    }
    return inner
}
outer(20)();
