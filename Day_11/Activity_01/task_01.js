let myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("this is resolve");
    },2000)
});


myPromise.then((data)=>{
   console.log(data);
}).catch((error)=>{
   console.log(error);
})