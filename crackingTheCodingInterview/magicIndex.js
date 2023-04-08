/**
 * binary search
 * Time & Space: O(log(n))  (constant space without recursion)
 */
const magicIndex = (nums) => {
    if (!nums.length) return 
    const find = (s, e) => {
        if (s > e) return undefined
        let m = Math.floor((e + s) / 2)
        if (m === nums[m]) {
            return m
        } else if (m > nums[m]) {
            return find(m + 1, e)
        } else {
            return find (s, m - 1)
        }
    }
    return find(0, nums.length-1)
}
console.log(magicIndex([-1, 0, 1, 2, 3, 5, 100, 200, 300, 400, 500, 600, 700]))
            // Answer = 5