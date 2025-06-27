class Solution {
    constructor() {
        this.cache = {}; 
    }

    digitDP(sum, idx, len, tight, n) {
        // console.log("CURR IDX: " + idx)
        if (idx >= len) {
            return sum;
        }
        let res = 0
        let maxD = 9
        console.log("BEFORE: idx: " + idx + " maxD: " + maxD + " tight: " + tight)

        if (tight) maxD = +n[idx]
        console.log("AFTER: idx: " + idx + " maxD: " + maxD + " tight: " + tight)
        for (let i = 0; i <= maxD; i++) {
            let x = i === 1 ? 1 : 0
            if (x === 1) {
                 console.log("CURRENT SUM: " + (sum + x) )
                
            }
            let newTight = tight && i === maxD

            console.log("IN AND EXIT THE FOR LOOP: idx : " + (idx+ 1 )+ " maxD: " + maxD + " tight: " + tight)
            res += this.digitDP(sum + x, idx + 1, len, newTight, n)
        }
        return res
    }

    countDigitOne(n) {
        n += ""
        let sum = 0, idx = 0, len = n.length, tight = true
        
        return this.digitDP(sum, idx, len, tight, n)
    }
}
const solution = new Solution();
const result = solution.countDigitOne(11); 
console.log(result); // Output: 6