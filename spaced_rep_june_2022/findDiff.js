var findTheDifference = function(s, t) {
    let v = s[0]
    for (let i = 1; i < s.length; i++) {
        for (let j = 0; j < t.length; j++) {
            v ^= t[j]
        }
    }
    return v
};

console.log(findTheDifference("ab", "a"))