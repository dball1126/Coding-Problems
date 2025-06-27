/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0'
    let len1 = num1.length, len2 = num2.length;
    let arr = new Array(len1 + len2).fill(0)
    let carry = 0

        for (let i = num1.length-1; i >= 0; i--) {
            let v1 = parseInt(num1[i])
            let v2 = 0
            for (let j = num2.length-1; j >= 0; j--) {
                v2 = parseInt(num2[j])
                let val = v1 * v2
                arr[(i + j) + 1] += val
                carry = Math.floor(arr[(i + j) + 1] / 10)
                arr[(i + j) + 1] %= 10
                arr[(i + j)] += carry
            }

        }

    let i = 0;
    while (arr[i] === 0) {
        i++
    }
    return arr.slice(i).join("")
};
console.log(multiply("13", num2 = "456"))

