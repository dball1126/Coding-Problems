var sortArray = function(nums) {
    let len = nums.length, result = []
    if (len <= 1) return nums

    const getPivot = (l, r) => {
        if (l === r) return 
        let m = nums[Math.floor((r + l) / 2)]
console.log(l)
console.log("RRR " + r)
        while (l <= r) {
            // if (r <= 0 || l >= len-1) break
            if (nums[r] < nums[l]) [nums[r], nums[l]] = [nums[l], nums[r]]

            while (l < len && nums[l] < m) l++
            while (r > -1 && nums[r] > m) r--
            if (l <= r) {
                [nums[r], nums[l]] = [nums[l], nums[r]]
                l++       ; r--     
            }

        }
        return l
    }
    let stack = [[0, len-1]]
    while (stack.length) {
        let [s,e] = stack.pop()
        if (s >= e) return
        let m = getPivot(s, e)
        if (m < len && m > -1) {

            if (s < m-1) {
                stack.push([s, m-1]); 
            }
            if (m < e) {
                stack.push([m, e])
    
            }
        }

    }

    return nums
};

console.log(sortArray([2,7,1,3,10]))