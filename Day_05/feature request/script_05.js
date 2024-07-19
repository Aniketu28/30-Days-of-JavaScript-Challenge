
function outer(fun,n){
   
    for(i=1;i<=n;i++){
        fun(i);
    }
}

function fun(num){
    console.log(`${num} call`);
}

outer(fun,5)