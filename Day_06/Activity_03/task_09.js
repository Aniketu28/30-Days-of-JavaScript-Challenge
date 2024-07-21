// sum of array element with reduce

var arr = [1,2,3,4,5,6,7,8,9,10];

var sum = arr.reduce((sum,currentVal) => {
    return sum + currentVal;
},0);

console.log(sum);  //output is 55 

