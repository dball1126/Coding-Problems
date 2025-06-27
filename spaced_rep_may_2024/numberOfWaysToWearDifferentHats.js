/**
 * @param {number[][]} hats
 * @return {number}
 */
// Dynamic Programming AND BitMasking
// Time: O(k * n *  2^n)....n for people and k for hats
// Space: O(k * 2^n)
var numberWays = function(hats) {
    let max = -Infinity, memo = new Map(), min = Infinity
    const done = (1 << hats.length) - 1, hatsToPeople = new Map(), mod = 10**9 + 7
    hats.forEach((arr, i) => {
        arr.forEach(h => {
            if (!hatsToPeople.has(h)) hatsToPeople.set(h, [])
            hatsToPeople.get(h).push(i)
        max = Math.max(max, h)
        min = Math.min(min, h)})
    })
    const dp = (idx, mask) => {
        let k = idx + ":" + mask
        if (memo.has(k)) return memo.get(k)
        if (done === mask) return 1
        if (idx > max) return 0;
        let ans = dp(idx+1, mask)
        if (hatsToPeople.has(idx)) {
            let hatsArr = hatsToPeople.get(idx)
            for (let i = 0; i < hatsArr.length; i++) {
                let ppl = hatsArr[i]
                if (((1 << ppl) & mask )=== 0) {
                    ans = ans + dp(idx+1, mask | (1 << ppl)) % mod
                }
            }
        }
        memo.set(k, ans)
        return ans
    }
    return dp(min, 0) % mod
};
console.log(numberWays([[3,4],[4,5],[5]])) // = 1