function countOccurrences(arr, value) {
    if (arr.length === 0) {
        return 0;
    }
    return (arr[0] === value ? 1 : 0) + countOccurrences(arr.slice(1), value);
}

const myArray = [1, 2, 3, 1, 4, 1, 5];
const valueToCount = 1;
console.log(countOccurrences(myArray, valueToCount));  
