/**
 * @param {number[]} nums
 * @return {number}
 */
// Prefix Sum / Dynamic Programming
// Time and Space: O(n)
var waysToMakeFair = function(nums) {
    let ways = 0, n = nums.length, oddMap = new Map([[0,0]]), evenMap = new Map([[0,0]]);
    let even = 0, odd = 0;
    
    for (let i = 0; i < n; i++) {
        if ((i & 1) === 1) {
            odd += nums[i]; 
            oddMap.set(i, odd)
            evenMap.set(i, (evenMap.get(i-1) || 0))
        } else {
            even += nums[i]; 
            evenMap.set(i, even)
            oddMap.set(i, (oddMap.get(i-1) || 0))
        }
    }

    for (let i = 0; i < n; i++) {
        let newEven = (evenMap.get(i-1) || 0) + (odd - (oddMap.get(i) || 0))
        let newOdd = (oddMap.get(i-1) || 0) + (even - (evenMap.get(i) || 0))

        if (newEven === newOdd) ways++
    }
    return ways;
};

console.log(waysToMakeFair( [1,1,1])) // = 3

