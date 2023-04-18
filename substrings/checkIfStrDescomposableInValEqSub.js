
// Dynamic Programming
// Top-down
var isDecomposable = function(s) {
    if (s.length < 1) return false
    let memoCheckF = [...new Array(s.length+1)], memoCheckT = [...new Array(s.length+1)]
    memoCheckF[1] = s[0] === s[1]
    memoCheckT[2] = s[0] === s[1] && s[1 ]=== s[2]

    const dp = (i, check) => {
        if (i < 0) return false;
        if (check && memoCheckT[i] !== undefined) return memoCheckT[i]
        if (!check && memoCheckF[i] !== undefined) return memoCheckF[i]
        let val = false, val2 = false;
        if (!check) {
            if (i - 1 >= 0 && s[i] === s[i-1]) {
                val = dp(i-2, true)
            } 
            if (i - 4 >= 0 && (s[i] === s[i-1] && s[i] === s[i-2])) {
                val2 = dp(i-3, false)
            }
        } else if (check) {
            if (i - 2 >= 0 && (s[i] === s[i-1] && s[i] === s[i-2]) && ((i+1) % 3) === 0) {
                val = dp(i-3, true)
            } else {
                val = false;
            }
        }
        if (check) {
            return memoCheckT[i] = val;
        } else {
            return memoCheckF[i] = val || val2;
        }
    }
    return dp(s.length-1, false)
};
console.log(isDecomposable("11166111111111111111")) // = true