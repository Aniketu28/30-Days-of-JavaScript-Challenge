let myPromise = new Promise((resolve, reject)=>{
    let n = 5;
    if(n > 5){
        resolve("this is resolve");
    }else{
        setTimeout(()=>{
            reject("this is reject");
        },2000)
    }
});


myPromise.then((data)=>{
   console.log(data);
}).catch((error)=>{
   console.log(error);
})