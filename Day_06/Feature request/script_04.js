//create and manipulate 2d array

const Arr = [
    [1,'Aniket',25],
    [2,'Nitin',25],
    [3,'Ram',25],
]

console.log("Array elements")

Arr.forEach(item => {
    console.log(item);
})

console.log("Array first index element")

console.log(Arr[1][0],"",Arr[1][1],"",Arr[1][2]);

console.log("pushed Element at last index");

Arr.push([4,'rohan',25]);

console.log("updated Array");

console.log(Arr);

