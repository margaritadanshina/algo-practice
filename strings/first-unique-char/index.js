var firstUniqueChar = function(string) {
    let hashmap = {};
    //the first for loop for checking every letter in our s
    for(let i = 0; i < string.length; i++) {
        let char = string[i];
        //building a hashmap
        if(!hashmap[char]) {
            //if a letter doesn't exist in the map yet = 1
            hashmap[char] = 1;
        } else {
            //otherwise +1 to the existing one
            hashmap[char] += 1;
        }
    }
    //the second for loop for checking elements against our hashmap key-value pairs
    for(let i = 0; i < string.length; i++) {
        let char = string[i];
        //the first one with value = 1, return its index
        if(hashmap[char] === 1) {
            return i;
        }
    }
    //if a unique char doesn't exist
    return -1;
}

//space - O(1) English alphabet contains 26 letters;
//time - O(N) we do two for loops through the string of length N;