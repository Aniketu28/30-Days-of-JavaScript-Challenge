function binarySearch(arr, low, high, x) {

    if (low > high) {
        return -1; 
    }

    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === x) {
        return mid; 
    }

    if (arr[mid] > x) {
        return binarySearch(arr, low, mid - 1, x);
    }

    return binarySearch(arr, mid + 1, high, x);
}

const arr = [2, 3, 4, 10, 40];
const x = 10;

const result = binarySearch(arr, 0, arr.length - 1, x);

if (result !== -1) {
    console.log(`Element is present at index ${result}`);
} else {
    console.log("Element is not present in the array");
}
