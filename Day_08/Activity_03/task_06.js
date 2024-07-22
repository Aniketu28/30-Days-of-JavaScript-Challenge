//rest operator 

function sum(...args) {
    return args.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2)); 
console.log(sum(1, 2, 3, 4)); 
console.log(sum(5, 10, 15)); 
