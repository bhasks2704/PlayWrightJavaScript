function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
      if (vowels.indexOf(str[i]) !== -1) {
        console.log("------------")
        console.log(vowels.indexOf(str[i]))
        console.log("------------")
        count++;
      }
    }
    
    return count;
  }
  
  console.log(countVowels("hello world")); // Output: 3
  