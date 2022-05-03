let element = document.getElementById("test")
console.log("element",element);

// element.innerText="<button> Good Evening </button>"      //it will print text as it is given 
element.innerText="Good Evening"        
// element.innerHTML="<button> Good Evening </button>"      // it will not conside the tags and print the text

// 
element.style.color = "blue"
element.style.backgroundColor = "gray"

// To create a tag by Java Script
let pElement = document.createElement('p')
pElement.innerText = "Welcome to JS"
document.write(pElement.innerText)