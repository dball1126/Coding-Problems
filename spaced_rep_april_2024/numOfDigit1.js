class Solution {
    constructor() {
        this.cache = {}; 
    }

    digitDP(curr, i, len, tight, n) {
        if (i > len || curr > len) return 0

        if (tight) {
            i = +n[i]
        }
        let res = 0
        for (let j = curr; j <= i; j++) {
            let x = j === 1 ? 1 : 0
            let newtight = tight && j === i
            if (x === 1) res++

            res += this.digitDP(j+x, i+1, len, newtight, n)
        }
        return res
    }

    countDigitOne(n) {
        n = n + ""
        let curr = 0, i = 0, len = n.length
        return this.digitDP(curr, i, len, true, n)
    }
}
const solution = new Solution();
const result = solution.countDigitOne(13); 
console.log(result); // Output: 6