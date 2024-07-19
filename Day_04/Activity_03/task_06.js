// factorial of no using do while loop

let fact = 1;
let num = 5;
let i = 1;

do{
    fact *= i;
    i++;
}while(i <= num);

console.log(fact)