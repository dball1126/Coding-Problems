var findDuplicate = function(nums) {
  
    for (let i = 0; i < nums.length; i++) {
        const stack = []
        stack = [nums[0]]
        while (stack.length) {
            let v = stack.pop()
            if (nums[v-1] !== nums[v]) {
                stack.push(nums[v-1])
                nums[v-1] = v
            }
        }
    }

    for (let i = 0; i < nums.length; i++) {
        const v = nums[i];
        if (nums[i] !== i+1) return v
    }
};

console.log(findDuplicate(1,2,2))