//Euclid's algo

function euc(a, b) {
    if (b === 0) { 
        return a;
    } else {
        return euc(b, a % b);
    }
}

console.log(euc(462, 910))