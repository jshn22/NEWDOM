const gallery = document.getElementById("gallery")
const large = document.getElementById("largeimg")
const firstimg = gallery.querySelector("img")

if(firstimg){
    large.src = firstimg.src
    large.alt = firstimg.alt
}
gallery.addEventListener("mouseover", (event)=>{
    if(event.target.tagName === "IMG"){
        large.src = event.target.src
        large.alt = event.target.alt
    }
})
gallery.addEventListener("click", (event)=>{
    if(event.target.tagName === "IMG"){
        console.log(`You clicked: ${event.target.alt}`);
    }
})
    