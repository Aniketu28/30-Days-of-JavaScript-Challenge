function max(arr) {
    if (arr.length === 0) {
      return 0;
    }
    else {
      return arr[0] > max(arr.slice(1));
    }
  }
  

  const arr = [1,2,3,4,5];

  console.log(max(arr));