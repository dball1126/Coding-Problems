/**
 * Use Sliding Window Technique.
 * Collect all results in an array, account for duplicate elements.
 * Time Complexity O(n)
 * Space Complexity O(n). It's possible the result array has all n elements.
 */
var findSubsequences = function(nums) {
    if (nums.length === 1) return []
    let [s,e,result, sub] = [0,0,[],[]];

    while (e < nums.length) {
        let n = nums[e]
        let f = nums[e + 1] === undefined ? -Infinity : nums[e + 1]
        sub.push(n)

        if (f < n) {
            if (sub.length >= 2) result.push(sub)
            sub = []
            while (s <= e) s++;
        } else if (sub.length >= 2) {
            result.push(sub)
        }
        e++
    }
    return result;
};

console.log(findSubsequences())