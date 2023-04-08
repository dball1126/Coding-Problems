var removeElement = function(nums, val) {
    let count = 0;

    if (nums.length === 1 && val === nums[0]) {
        nums[0] = "_"
        return 0
    }
    if (nums[nums.length-1] === val) {
        count++
        nums[nums.length-1] = "_"
    }
console.log(nums)
    for (let i = 0; i < nums.length-1; i++) {
        if (nums[i] === val ) {
            bubbleUp(nums, i)
            
            count++    
        }
        
    }
 return nums.length
    return nums.length - count
};

const bubbleUp = (nums, idx) => {
    nums[idx] = "_"
    for (let i = idx; i < nums.length-1; i++) {
        
        if (nums[i+1] !== undefined) {
            if (nums[i+1] === "_") continue;
            [nums[i], nums[i+1]] = [nums[i+1], nums[i]]
            
        }
    }
}


console.log(removeElement([4,5],5
    ))