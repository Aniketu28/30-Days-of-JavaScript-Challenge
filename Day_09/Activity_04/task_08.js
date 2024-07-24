
let text = document.getElementById("text");

text.classList.add("text2");

setTimeout(() => {
    text.classList.remove("text2");
}, 5000);
