/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder = function(preorder) {
    let stack = []
    let min = -Infinity;

    for (let i = 0; i < preorder.length; i++) {
        const num = preorder[i];
        if (num < min) return false;
        while (stack.length && stack[stack.length -1] < num) {
            min = stack.pop();
        }
        stack.push(num)
    }
    
    return true;
};

const verifyPreorder = (preorder) => {
    let min = -Infinity;
    
    const helper = (stack, values) => {
        if (!values.length) return true;
        let value = values.shift();
        if (value < min) return false;
        while (stack.length && stack[stack.length - 1] < value) {
            min = stack.pop();
        }
        stack.push(value)
        return helper(stack, values)
    }
    return helper([], preorder)
}


let nums = [3,1,4,2]

console.log(verifyPreorder(nums))