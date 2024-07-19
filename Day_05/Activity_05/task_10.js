
function double(x){
    return x * 2;
}

function square(x){
    return x * x;
}

function fun(double,square){
    return function(x){
        return double(square(x))
    }
}

let a = fun(double,square);
let result = a(5);
console.log(result);