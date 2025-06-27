// /**
//  * @param {number} d
//  * @param {number} low
//  * @param {number} high
//  * @return {number}
//  */
var digitsCount = function(d, low, high) {
    low += ""
    high += ""
    const digitDp = (sum, idx, len, tight) => {
        if (idx >= len) return sum;

        let res = 0
        let maxD = 9
        let s = 0;
        // if (tight && low[idx]) s = parseInt(low[idx])
        if (tight) maxD = parseInt(high[idx])
       
        // console.log(`%cPREV1 ` + prev, "color:blue")
        // console.log("lowPrev: " + lowPrev + ` %cPREV ` + prev, "color:blue")
        // console.log(`%cPREV ` + prev, "color:blue")

        for (let i = s; i <= maxD; i++) {
            let newTight = tight && i === maxD

            let x = 0
            if (tight && low[idx]) {
                if (parseInt(low[idx]) >= i) {
                    x = i === d ? 1 : 0
                }
            } else {
                x = i === d ? 1 : 0
            }
            res += digitDp(sum + x, idx+1, len, newTight)
        }
        return res
    }
    return digitDp(0, 0, high.length, true)
};

// class Solution {
//     constructor(targetDigit) {
//       this.target = targetDigit;
//       this.memo = null; // Dynamic programming memoization table
//     }
  
//     digitsCount(d, low, high) {
//       return this.helper(high) - this.helper(low - 1);
//     }
  
//     helper(n) {
//       const s = n.toString().split(''); // Convert number into character array
//       const m = s.length;
  
//       // Initialize memoization table
//       this.memo = new Array(m);
//       for (let i = 0; i < m; i++) {
//         this.memo[i] = new Array(m).fill(-1);
//       }
  
//       return this.dp(0, 0, true, false);
//     }
  
//     dp(i, mask, isLimit, isNum) {
//         if (i === this.s.length) return mask; // Using 'this.s'
    
//         if (!isLimit && isNum && this.memo[i][mask] !== -1) {
//           return this.memo[i][mask]; 
//         }
    
//         let result = 0;
//         const up = isLimit ? parseInt(this.s[i], 10) : 9; 
    
//         if (!isNum) {
//           result = this.dp(i + 1, mask, false, false); 
//         }
    
//         for (let d = isNum ? 0 : 1; d <= up; d++) {
//           result += this.dp(i + 1, mask + (d === this.target ? 1 : 0), isLimit && (d === up), true);
//         }
    
//         if (!isLimit && isNum) {
//           this.memo[i][mask] = result; 
//         }
    
//         return result;
//       }
//   }

//   const solution = new Solution();
//   const result = solution.digitsCount(d = 3, low = 100, high = 250); 
//   console.log(result); // Output: 6

console.log(digitsCount(d = 3, low = 100, high = 250))