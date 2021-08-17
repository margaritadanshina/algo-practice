function maxDepth(s) {
    let depth = 0;
    let maxDepth = 0;
    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        if(char === "(") {
            depth++;
        } else if(char === ")") {
            if(depth > maxDepth) {
                maxDepth = depth;
            }
        depth --;
        }
    }
    return maxDepth;
};


console.log(maxDepth("(1+(2*3)+((8)/4))+1"))
console.log(maxDepth("(1)+((2))+(((3)))"))
console.log(maxDepth("1+(2*3)/(2-1)"))