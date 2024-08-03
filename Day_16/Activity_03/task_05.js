function reverseString(str) {
    if (str.length <= 1) {
      return str;
    }
    return reverseString(str.slice(1)) + str[0];
  }
  
const str = "Aniket";
console.log(reverseString(str));