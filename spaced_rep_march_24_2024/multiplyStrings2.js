/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

// Time: O(n * m)
// Space: O(n + m)
var multiply = function(num1, num2) {
    if (num1 === "0" || num2 === "0") return "0"
    let n = num1.length, m = num2.length
    let arr = new Array(n + m).fill(0)
    let carry = 0
    for (let i = num1.length-1; i >= 0; i--) {

        for (let j = num2.length-1; j >= 0; j--) {
            let v1 = parseInt(num1[i]), v2 = parseInt(num2[j])
            let value = v1 * v2
            arr[i+j+1] += value; 
            carry = Math.floor(arr[i+j+1] / 10)
            arr[i+j+1] = arr[i+j+1] % 10
            arr[i+j] += carry
        }
    }
    let idx = 0
    while (arr[idx] === 0 && idx < arr.length) {
        idx++
    }
    return arr.slice(idx).join("")
};
console.log(multiply(num1 = "2", num2 = "3"))