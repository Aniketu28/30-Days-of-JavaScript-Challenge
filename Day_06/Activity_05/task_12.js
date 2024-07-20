//create 2d array and print

let Arr = [[1,2,3],[4,5,6],[7,8,9]];

Arr.forEach(item => {
   console.log(item);
})


let arr = [];
let row = 3;
let col = 3;
let val = 0;

for(let i = 0; i < row; i++){
    arr[i] = [];
    for(let j = 0; j < col; j++){
        arr[i][j] = val++;
    }
}

console.log(arr);