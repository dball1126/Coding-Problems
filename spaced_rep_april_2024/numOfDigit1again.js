class Solution {
    constructor() {
        this.cache = {}; 
    }

    digitDP(curr, j, len, tight, n) {
        if (j >= len) return curr

        let res = 0
        let maxD = 9
        if (tight) maxD = n[j]
        for (let i = 0; i <= maxD; i++) {
            let x = i === 1 ? 1 : 0
            // if (x === 1) res++
            let newTight = tight && i === maxD

            res += this.digitDP(curr+x, j+1, len, newTight, n)
        }
        return res
    }

    countDigitOne(n) {
        n += ""
        let curr = 0, i = 0, len = n.length, flag = true
        return this.digitDP(curr, i, len, flag, n)
    }
}
const solution = new Solution();
const result = solution.countDigitOne(13); 
console.log(result); // Output: 6