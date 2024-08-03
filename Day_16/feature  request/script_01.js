function outer(){
    let a = 10;
    return function inner(){
        console.log(a);
    }
}

let fun = outer();

console.log(fun());
