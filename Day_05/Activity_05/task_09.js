// high order function

// function outer(num){
//     function inner(){
//          return num + 1;
//     }
//     return inner;
// }

// let num = outer(5);
// console.log(num())


function outer(fun,n){
   
    for(i=1;i<=n;i++){
        fun(i);
    }
}

function fun(num){
    console.log(`${num} call`);
}

outer(fun,5)