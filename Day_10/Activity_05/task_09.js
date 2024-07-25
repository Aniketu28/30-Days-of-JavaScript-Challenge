let ul = document.getElementById("ul");

ul.addEventListener("click",(event)=>{
    if (event.target.tagName === 'LI') {
        let text = event.target.textContent; 
        console.log(text); 
    }
})