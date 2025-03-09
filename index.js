function createUserHTML(user) {
    return `<div>
            <h2>${user.name}</h2>
            <p>${user.email}</p>
            </div>`;
}

function renderUsers(container, users){
    users.forEach(user =>{
        container.innerHTML += createUserHTML(user)
    });
}

async function getUsers () {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok){
            throw new Error('HTTP error! Status: ${response.status}');
        }
        const users = await response.json();
        console.log(users)
        const container = document.getElementById("users");
        renderUsers(container, users);
    } catch (error){
        console.log(error)
    }
    
}
getUsers()