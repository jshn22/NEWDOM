let body = document.getElementsByTagName('body');
let container = document.getElementById("container");
let btn = document.getElementsByClassName("display");
 
const fetchApi = async () => {
    try {
        container.innerHTML = "";
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await response.json();
        console.log(data);
        data.forEach(element => {
            let div = document.createElement("div");
            div.className = "user-card";
            div.innerHTML = `
                <img src="userProfile.jpg" alt="User Profile" style="width:100px;height:100px;"><br>
                <h3>${element.name}</h3><br>
                <p><b>Username:</b> ${element.username}</p><br>
                <p><b>Email:</b> ${element.email}</p><br>
                <p><b>City:</b> ${element.address.city}</p><br>
            `;
            container.appendChild(div);
        });
    } catch (error) {
        console.error('Error fetching API:', error);
    }
}

