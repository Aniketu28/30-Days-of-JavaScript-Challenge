let name = document.getElementById("name");
let number = document.getElementById("number");
let submit = document.getElementById('submit');

document.addEventListener("submit",(event)=>{
   event.preventDefault();
   console.log(name.value);
   console.log(number.value);
})