/*given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema,
formed from iceman. */

function validAnagram(str1, str2) {
    //our first check if the length of str1 is equal to str2
    if(str1.length !== str2.length) {
        return false;
    }
    //creating an object for future checks
    let check = {};
    //first loop to create a count for the first string
    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        if(check[letter]) {
            check[letter] += 1;
        } else {
            check[letter] = 1;
        }
    }
    //second loop to compare whether a correspondent letter exists in the obj
    for(let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        if(!check[letter]) {
            return false;
        } else {
            check[letter] -= 1;
        }
    }
    return true;
}

console.log(validAnagram('cinema', 'iceman'));
console.log(validAnagram('cinem', 'iceman'));


// write a function called sameFrequency. Given two positive integers, find out if the two
//numbers have the same frequency 
function sameFrequency(num1, num2){
    let numStr1 = num1.toString();
    let numStr2 = num2.toString();
    let compare = {};
  // good luck. Add any arguments you deem necessary.
  if(numStr1.length !== numStr2.length) {
      return false;
  }
  for(let i = 0; i < numStr1.length; i++) {
      let check = numStr1[i];
      if(compare[check]) {
          compare[check] += 1;
      } else {
          compare[check] = 1;
      }
  }
  for(let j = 0; j < numStr2.length; j++) {
      let check = numStr2[j];
      if(!compare[check]) {
          return false;
      } else {
          compare[check] -= 1;
      }
  }
  return true;
}



console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));

