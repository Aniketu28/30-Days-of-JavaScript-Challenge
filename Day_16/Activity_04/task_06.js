function reverseString(str) {
    if (str.length <= 1) {
      return str;
    }
    return reverseString(str.slice(1)) + str[0];
  }
  
const str = "nitin";
const rev = reverseString(str);

if(str == rev){
    console.log("string is palidrome ")
}else{
    console.log("string is not palidrome")
}