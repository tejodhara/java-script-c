let arr1 = ["mango","apple","banana","graps"];
for(let i in arr1){console.log(arr1[i]);}
console.log("========== push() =============");
arr1.push("dragon","kiwi");
for(let i in arr1){console.log(arr1[i]);}       // add last elemetns
console.log("=========== pop() ============");
arr1.pop()
for(let i in arr1){console.log(arr1[i]);}       //remove last element
console.log("============ unshift() ===========");
arr1.unshift("hello")
for(let i in arr1){console.log(arr1[i]);}       // add at the first
console.log("=======================");
arr1.shift()
for(let i in arr1){console.log(arr1[i]);}       // remove the first element
console.log("============ update ===========");
arr1[0] = "mosambi"
for(let i in arr1){console.log(arr1[i]);}       // update


console.log("==========innerText and InnerHTML =============");     


function innerTextFn() {
    var x = document.getElementById('test');
    alert(x.innerText);
}

function innerHTMLFn() {
    var x = document.getElementById('test');
    alert(x.innerHTML);
}
function innerContentFn() {
    var x = document.getElementById('test');
    alert(x.textContent);
}

console.log("======================================");
function getLocation(){
    if(navigator.getLocation){
        navigator.getLocation.getCurrentPosition(showPosition);
        function showPosition(position){
            console.log("Latitude :"+ position.coords.latitude+ "\n"+"Longitude :"+position.coords.longitude);
        }
    }
}getLocation();