/**
 * Time: O(n) + O(n)  = O(n)
 * Space: O(n)
 */
var longestConsecutive = function(n) {
    if (n.length <= 0) return 0;
    let set = new Set(), max = 1
    for (let i = 0; i < n.length; i++) {
        set.add(n[i])
    }

    for (let i = 0; i < n.length; i++) {
        let num = n[i] - 1
        if (num !== undefined && !set.has(num)) {
            let temp = n[i], count = 0
            while (set.has(temp)) {
                count++
                temp++
            }
            max = Math.max(max, count)
        }   
    }
    return max
};

console.log(longestConsecutive(nums = [1]))