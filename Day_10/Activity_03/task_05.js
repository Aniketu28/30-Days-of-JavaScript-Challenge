let inputext = document.getElementById("inputext");
let text = document.getElementById("text");

inputext.addEventListener("keydown",(event)=>{
    text.innerHTML = event.key;
})