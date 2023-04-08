var longestPalindrome = function(s) {
    let map = {}
    let totalLength = 0;
    let firstValue = false;
    s.split("").forEach(letter => {
        if (map[letter]) {
            map[letter] = map[letter] +=1
        } else {
            map[letter] = 1
        }
    });
    
    Object.values(map).forEach(value => {
        if (!firstValue && value === 1) {
            totalLength++;
            firstValue = true;
        } else if (value !== 1 && value % 2 === 0) {
            totalLength += value;
        }
    })

    return totalLength;
};

console.log(longestPalindrome("eae"))