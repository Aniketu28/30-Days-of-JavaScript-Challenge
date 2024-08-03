function findMax(arr) {
  
    if (arr.length === 1) {
      return arr[0];
    }
    
    const maxOfRest = findMax(arr.slice(1));
    
    if (arr[0] > maxOfRest) {
      return arr[0];
    } else {
      return maxOfRest;
    }
  }
  
  let arr = [1,2,3,5,4];
  console.log(findMax(arr))