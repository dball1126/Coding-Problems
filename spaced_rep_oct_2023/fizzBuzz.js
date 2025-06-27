/**
 * @param {number} n
 * @return {string[]}
 */

// Time: O(n)
// Space: O(1)
var fizzBuzz = function(n) {
    const result = []
    for (let i = 1; i <= n; i++) {
        const div3 = (i %3 ) === 0
        const div5 = (i % 5 ) === 0
        if (div3 && div5) {
            result.push("FizzBuzz")
        } else if (div3) {
            result.push("Fizz")
        } else if (div5) {
            result.push("Buzz")
        } else {
            result.push(`${i}`)
        }
    }
    return result;
};

console.log(fizzBuzz(15))