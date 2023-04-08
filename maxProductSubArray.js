/**
 * Time: O(n)
 * Space: O(1)
 */
const maxProduct = (n) => {
    if (!n.length) return 0;
    let max = n[0], cMax = n[0], cMin = n[0]

    for (let i = 1; i < n.length; i++) {
        let v = n[i], tmpCMax = cMax, tmpCMin = cMin
        max = Math.max(v, v * cMin, v * cMax, max)
        cMax = Math.max(v * tmpCMin, tmpCMax * v, v)
        cMin = Math.min(v * tmpCMin, tmpCMax * v, v)
    }
    return max
}

console.log(maxProduct(nums = [-2,0,-1]))