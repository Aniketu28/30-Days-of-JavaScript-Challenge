let inputext = document.getElementById("inputext");
let text = document.getElementById("text");

inputext.addEventListener("keyup",(event)=>{
    text.innerHTML = event.key;
})