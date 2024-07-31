function numToFact(num){
    let fact = 1
    function calculateFact(){
        for(let i=1; i<=num; i++){
             fact *= i;
        }
    }
    
    calculateFact();

    return fact;
}

let fact = numToFact(5)
console.log(fact);
//done