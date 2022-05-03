function showName(){
    let nameTag = document.querySelector("h1")
    console.log("nameTag",nameTag);
    nameTag.style.visibility = "visible"
}

function hideName(){
    let nameTag = document.querySelector("h1")
    console.log("nameTag",nameTag);
    nameTag.style.visibility = "hidden"
}

function showHideName(){
    let nameTag = document.querySelector("h1")
    if(nameTag.style.visibility == "hidden"){
        nameTag.style.visibility = "visible"
    }else{
        nameTag.style.visibility = "hidden"
    }
}

let btnEle = document.getElementById('clicko')
btnEle.addEventListener("click",function(event){
    console.log("Button is clicked")
    console.log(event)
})

btnEle.addEventListener("onmouseover",function(){
    console.log("Button is clicked")

})
