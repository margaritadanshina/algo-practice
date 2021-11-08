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
