// Two Pointer
// Time: O(n)
// Space: O(1)
var twoSum = function(nums, tgt) {
    let s = 0, e = nums.length-1;
    
    while (s < e) {
        if ((nums[s] + nums[e]) === tgt) return [s + 1, e + 1]
        if (nums[e] + nums[e-1] === tgt) return [e-1+1, e+1] 
        if (nums[s] + nums[s+1] === tgt) return [s+1, s+1+1] 
        let v1 = Math.abs(tgt - (nums[e-1] + nums[s]))
        let v2 = Math.abs(tgt - (nums[s+1] + nums[e]))
        if (v1 <= v2) {
            e--
        } else {
            s++
        }
    }
};

console.log(twoSum([2,7,11,15], 9))// = [ 1, 2 ]