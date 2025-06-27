// /**
//  * @param {string} s
//  * @return {number}
//  */
// /**
//  * Time: O(2^n)
//  * Space:O(n)
//  */
// var distinctSubseqII = function(s) {
//     const memo = new Set(), n = s.length

//     const dp = (idx, curr) => {
//         if (idx >= n) return

//         for (let i = idx; i  < n; i++) {
//             if (memo.has(curr + s[i])) {
//                 continue
//             } else {
//                 memo.add(curr + s[i])
//                 dp(i+1, curr + s[i])
//             }
//         }
//     }
//     dp(0, "")
//     return memo.size % ((10**9) + 7)
// };


/**
 * @param {string} S
 * @return {number}
 */
var distinctSubseqII = function(S) {
    const indexs = {};
    const cache = [1];
    const mod = 1000000007
    for (let i = 0; i < S.length; i++) {
	    const char = S[i];
		let value = (cache[cache.length - 1] * 2) % mod;
		if (cache[indexs[char]]) value = (value + mod - cache[indexs[char]]) % mod;
		cache.push(value);
        indexs[S[i]] = i;
    }
    return cache[cache.length - 1] - 1;
};

console.log(distinctSubseqII("zzc"))