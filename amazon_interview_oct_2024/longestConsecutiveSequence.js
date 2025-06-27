/**
 * @param {number[]} nums
 * @return {number}
 */
// Time & Space: O(n)
var longestConsecutive = function(nums) {
    const set = new Set()
    let longest = 0 
    for (let c of nums) set.add(c) //preprocessing

    const getSequence = (n) => {
        let len = 0
        while (set.has(n)) {
            len++
            n-=1
        }
        return len;
    }

    for (let c of nums) {
        let nx = set.has(c+1)
        if (!nx) {
            longest = Math.max(longest, getSequence(c))
        }
    }
    return longest
};
console.log(longestConsecutive(nums =[100,4,200,1,3,2]))
// = 4 (1,2,3,4)

