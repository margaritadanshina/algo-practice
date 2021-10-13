//Euclid's algo

function euc(a, b) {
    if (b === 0) { 
        return a;
    } else {
        return euc(b, a % b);
    }
}

console.log(euc(462, 910))

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

const ht = new HashTable()