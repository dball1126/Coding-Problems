/**
 * @param {number} k
 * @return {number}
 */
var minOperations = function(k) {

    let count = 1
    let operations = 0
    let stack = [1]
    while (count < k) {
        let divideDiff = Math.ceil( (k-count) / stack[stack.length-1])
        let countDiff =  1 + stack[stack.length-1]

        if (countDiff <= divideDiff) {
            count++
            stack[stack.length-1]++
            operations++
        } else {
            operations += divideDiff
            return operations
        }
    }

    return operations
};
console.log(minOperations(k = 1))
// 11
/**
 * 2 or 10
 * 
 * 3 or 4
 * 
 * 4

 * 
 */

