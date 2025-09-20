const input = document.getElementById("input");
const press = document.getElementById("key-name")
const form = document.getElementById("key-form")
form.addEventListener("submit", (event)=>{
    event.preventDefault();
})
input.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        press.innerText = `You pressed Enter!`;
    }else{
        press.innerText = `Key: ${event.key}`
    }
})