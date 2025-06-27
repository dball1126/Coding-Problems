class Solution {
    constructor() {
        this.cache = {}; 
    }
    digitDP (sum, idx, len, tight, n) {
        if (idx >= len) return sum;

        let maxD = tight ? +n[idx] : 9
        let res = 0
        for (let i = 0; i <= maxD; i++) {
            
            
        }

    }

    countDigitOne(n) {
        n += ""
        return this.digitDP(0, 0, n.length, true, n)
    }
}
const solution = new Solution();
const result = solution.countDigitOne(13); 
console.log(result); // Output: 6