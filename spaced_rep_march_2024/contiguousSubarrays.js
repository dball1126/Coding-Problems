// MonoTonic Stack
// Time and Space: O(n)
const contiguousSubarrays = (nums) => {
    let result = nums.map(a => 1), n = nums.length, stack = []
    const top = () => stack[stack.length-1]
    for (let i = 0; i < n; i++) {
        while (stack.length && nums[i] >= nums[top()]) {
            let idx = stack.pop();
            let right = i - idx - 1
            let left
            if (!top()) { left = idx - 0
            } else { left = idx - top() - 1}
            result[idx] += (left + right)
        }
        stack.push(i)
    }

    while (stack.length) {
        let idx = stack.pop();
        let right = n - idx - 1, left
        if (!top()) { left = idx - 0
        } else { left = idx - top() - 1 }
        result[idx] += (left + right)
    }
    return result;
}
console.log(contiguousSubarrays([3,4,1,6,2])) //= [ 1, 3, 1, 5, 1 ]
