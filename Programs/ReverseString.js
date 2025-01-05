function reverseString(str) {
    // return str.split(' ').reverse().join('');
    let strsplit = str.split(' ')
    // console.log(strsplit)
    let strreverse = strsplit.reverse()
    // console.log(strreverse)
    let strjoin = strreverse.join('')
    // console.log(strjoin)
    return strjoin
  }
  
  console.log(reverseString("Today is Saturday")); // Output: "Saturday is Today"
  