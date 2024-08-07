
function request(){
    return new Promise((resolve,reject)=>{
       setTimeout(function() {
         resolve("resolve");
       }, 1000);
    })
}


request().then((data)=>{
   console.log(data);
   return request();
}).then((data2)=>{
   console.log(data2);
})