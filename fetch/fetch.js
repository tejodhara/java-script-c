let utl ="https://jsonplaceholder.typicode.com/users"

let fetchUsers = async()=>{
    let response = await fetch(url);
    let data = await response.json();
    console.log("data",data);
}
fetchUsers();