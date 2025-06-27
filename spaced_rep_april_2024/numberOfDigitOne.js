class Solution {
    constructor() {
        this.cache = {}; 
    }

    digitone(curr, i, n, val, tight) {
        if (i >= n) {
            return curr;
        }
        
        const key = `${curr}-${i}-${tight}`; // Create a string key for the cache
        if (this.cache[key]) {
            return this.cache[key];
        }

        let res = 0;
        let maxd = 9;
        if (tight) {
            maxd = parseInt(val[i]);
        }

        for (let d = 0; d <= maxd; d++) {
            let currtight = tight && (d === maxd); 
            let x = (d === 1) ? 1 : 0;
            if (x === 1) {
                console.log(`%cSTEP: ` + "curr: " + curr + " i: " + i + " n: " + n + " val: " + val + " tight: " + tight, "color:red") 
            }

            res += this.digitone(curr + x, i + 1, n, val, currtight); 
        }

        this.cache[key] = res;

        console.log(this.cache)
        return res;
    }

    countDigitOne(n) {
        const val = n.toString();
        const l = val.length;
        return this.digitone(0, 0, l, val, true);
    }
}
const solution = new Solution();
const result = solution.countDigitOne(13); 
console.log(result); // Output: 6