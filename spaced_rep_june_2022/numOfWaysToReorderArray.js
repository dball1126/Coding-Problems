var numOfWays = function(nums) {
    
    let curr = [nums[0]], left = [], right = [], result = []

    const allSequences = (curr, left, right, result) => {
        if (!left.length || !right.length) {
            result.push([...curr, ...left, ...right])
            return
        }

        if (left.length) {
            let node = left.shift();
            curr.push(node)
            allSequences(curr, left, right, result)
            left.unshift(node)
            curr.pop();
        }

        if (right.length) {
            let node = right.shift()
            curr.push(node)
            allSequences(curr, left, right, result)
            right.unshift(node)
            curr.pop()
        }
    }

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < curr) {
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }

    // left.forEach(n1 => {
    //     right.forEach(n2 => {
            let sequence = []
            allSequences(curr, left, right, sequence)
            result.push(...sequence)
    //     })
    // })

    return result.length ? result.length - 1 : 0
};

console.log(numOfWays(nums = [2,1,3]))