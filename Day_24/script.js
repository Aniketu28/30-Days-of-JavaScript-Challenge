const check = document.getElementById("check");
const inputcity = document.getElementById("inputcity");
const temp =  document.querySelector(".temp");
const city = document.querySelector(".city");


check.addEventListener('click',async ()=>{
    let fetchData = await weatherFetch(inputcity.value);
    temp.innerHTML = fetchData.temp;
    city.innerHTML = fetchData.city;
});


async function weatherFetch(key){
     
    const apiurl = `https://api.openweathermap.org/data/2.5//weather?q=${key}&units=metric&appid=0c4061ab5271ca0625d1957e811a924d`;

    let res = await fetch(apiurl);

    let data = await res.json();

    console.log(data);

    return {   //it will return promise
        
       temp : data.main.temp_max,
       city : data.name
    }

}  