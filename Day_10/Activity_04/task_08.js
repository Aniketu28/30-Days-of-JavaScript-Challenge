
let select = document.getElementById("select");
let text = document.getElementById("text");

select.addEventListener("change",()=>{
    console.log(select.value);
    text.innerHTML = select.value;
})

