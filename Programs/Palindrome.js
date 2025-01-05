function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // console.log(cleanedStr.split('').reverse())
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  }
  
  if(isPalindrome("A man, a plan, a canal, Panama")){
    console.log("Palnidrime ")
  }else{
    console.log("not a palindrome")
  } // Output: true
//   console.log(isPalindrome("hello")); // Output: false
  