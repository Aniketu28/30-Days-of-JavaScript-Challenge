//default function parameter

let param = (a,b=0) =>{   
    return a * b;  
}

console.log(param(2,4));
console.log(param(2));