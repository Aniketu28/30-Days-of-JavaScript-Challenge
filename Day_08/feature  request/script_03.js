//sprade oprator

let arr = [1,2,3,4,5];

let newArr = [...arr,6,7,8,9,10];

console.log(arr);

console.log(newArr);


//rest operator 

function sum(...args) {
    return args.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2)); 
console.log(sum(1, 2, 3, 4)); 
console.log(sum(5, 10, 15)); 
