//Euclid's algo

function euc(a, b) {
    if (b === 0) { 
        return a;
    } else {
        return euc(b, a % b);
    }
}

console.log(euc(462, 910))

/*Memoization

- is a specialized form of caching used to store the result of a function call. 
The next time the function is called, instead of running the function itself, the result is used directly. 
Memo can result in much faster overall execution times (although it can increase memory requirements as function results are stored in memory).

- is a great technique to use alongside recursion. 
*/

// Hash table
// -> is a ds that allows to create a list of paired values
// it transforms a key into an integer index using a hash function
//the index will decide where to store key/value pair in memory


//Reason to use:
//fast search, insertion, and delete.

//Space O(n)
//Search O(1)
//Insert O(1)
//Delete O(1)

//clear()
//delete()
//entries()
//forEach()
//get()
//has()
//keys()
//set()
//values()

class Hagmap {
    constructor() {
        this.storage = [];
    }

    hashStr(str) {
        let finalHash = 0;
        for(let i = 0; i < str.length; i++) {
            const charCode = str.charCodeAt(i);
            finalHash += charCode;
        }
        return finalHash;
    }
//should take a key and a value as params, and store the pair
    set(key, val) {
        let idx = this.hashStr(key);
        if(!this.storage[idx]) {
            this.storage[idx] = []
        }
        this.storage[idx].push([key, val]);
    }
//returning value for the key
    get(key) {
        let idx = this.hashStr(key);
        if(!this.storage[idx]) {
            return undefined;
        }
        for(let keyVal of this.storage[idx]) {
            if(keyVal[0] === key) {
                return keyVal[1];
            }
        }
    }
}