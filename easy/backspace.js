// given two strings s and t return true if they are equal when both are typed into empty text editors
//'#' means a backspace character. 

function backspaceCompare(string, t) {
    let arr1 = [];
    let arr2 = [];
    for(let i = 0; i < string.length; i++) {
        let charString = string[i];
        if(charString === '#') {
            arr1.pop();
        } else {
            arr1.push(charString)
        }
    }
    for(let j = 0; j < t.length; j++) {
        let charT = t[j];
        if(charT === '#') {
            arr2.pop()
        } else (
            arr2.push(charT)
        )
    }
    let string1 = arr1.join();
    let string2 = arr2.join();
   
    return string1 === string2;
}

console.log(backspaceCompare('ab##', "a#c#")) //true
console.log(backspaceCompare('ab##', "ad#c")) //false
//console.log(backspaceCompare('a#c', "b")) //false
