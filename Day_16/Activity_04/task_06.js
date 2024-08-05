function isPalindrome(str) {
  if (str.length <= 1) {
      return true;
  }

  if (str[0] !== str[str.length - 1]) {
      return false;
  }

  return isPalindrome(str.slice(1, -1));
}

const str = "nitin";
if (isPalindrome(str)) {
  console.log("The string is a palindrome");
} else {
  console.log("The string is not a palindrome");
}
