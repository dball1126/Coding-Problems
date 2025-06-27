/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    if (!s.length) return true
    let prev1 = "", prev2 = ""
    let leftM = new Map(), rightM = new Map(), r = s.length-1
    for (let i = 0; i < s.length; i++) {
        leftM.set(i, prev1)
        prev1 += s[i]
        rightM.set(r, prev2)
        prev2 = s[r] + prev2
        r--
    }
    leftM.set(i, prev1)
    rightM.set(r, prev2)

    for (let i = 0; i < s.length; i++) {
        const v = s[i];
        if (leftM.has(i-1) && rightM.has(i+1)) {
            let word = leftM.get(i-1) + rightM.get(i+1)
            let valid = true
            let s1 = 0, e1 = word.length-1

            while (s1 < e1) {
                if (word[s1] !== word[e1]) {
                    valid = false;
                    break;
                }
                s1++; e1--

            }
            if(s1 >= e1 ) return valid = true;
        }
        if (!leftM.get(i-1) && !rightM.get(i+1)) return true

    }
    return s1 > e1  ? true : false
return true
};

console.log(validPalindrome("abe"))