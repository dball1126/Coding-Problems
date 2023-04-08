// Sort + Two pointer
// Time: O(n*2), Space: O(1)
var threeSumClosest = function(nums, target) {
    let closest = undefined;
    nums.sort((a,b) => a - b)
    const getClosestVal = (sum) => {
        if ((target < 0 && sum > 0) || (target > 0 && sum < 0)) {
            return Math.abs(sum) + Math.abs(target)
        }
        return Math.abs(Math.abs(sum) - Math.abs(target))
    }
    for (let i = 0; i < nums.length-2; i++) {
        let s = i+1, e = nums.length-1
        while (s < e) {
            let sum = nums[i] + nums[s] + nums[e]
            if (closest === undefined) {
                closest = sum
            } else {
                if (getClosestVal(sum) < getClosestVal(closest))
                    closest = sum
            }
            if (sum > target) {
                e--
            } else {
                s++
            }
        }
    }        
    return closest
};console.log(threeSumClosest( [4,0,5,-5,3,3,0,-4,-5],-2)) // = -2