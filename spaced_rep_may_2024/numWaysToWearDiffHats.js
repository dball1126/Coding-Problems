/**
 * @param {number[][]} hats
 * @return {number}
 */
// DP + Bitmask
// Time: O(n * (2^m))....n for hats and m for people
// Space: O(n * m)...for memoization
var numberWays = function(hats) {
    
    const hatsToPeople = new Map();
    const memo = new Map()
    let max = -Infinity, min = Infinity
    hats.forEach((arr, i) => {
        arr.forEach(h => {
            max = Math.max(max, h)
            min = Math.min(min, h)
            if (!hatsToPeople.has(h)) hatsToPeople.set(h, [])
            hatsToPeople.get(h).push(i)
        })
    })

    const done = 2**hats.length - 1

    const dp = (hat, mask) => {
        if (done === mask) return 1;
        if (hat > max) return 0
        let k = hat + ":" + mask
        if (memo.has(k)) return memo.get(k)
        let ans = dp(hat+1, mask)

        if (hatsToPeople.has(hat)) {
            const arr = hatsToPeople.get(hat)

            arr.forEach(v => {
                if ((mask & (1 << v)) === 0) {
                    ans += dp(hat + 1, mask | (1 << v))
                }
            })
        }
        memo.set(k, ans)
        return ans
    }
    return dp(min, 0)
};

console.log(numberWays([[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]]))