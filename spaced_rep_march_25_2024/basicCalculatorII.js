/**
 * @param {string} s
 * @return {number}
 */
// Stack
// Time: O(n)
var calculate = function(s) {
    let arr = []
    for (let i = 0; i < s.length; i++) { // pre-processing  // O(n)
        if (s[i] === " ") continue;

        if (s[i] >= "0" && s[i] <= "9") {
            let v = s[i]
            while (s[i+1] >= "0" && s[i+1] <= "9") {
                i++;
                v += s[i]
            }
            arr.push(parseInt(v))
        } else {
            arr.push(s[i])
        }
    }
    let stack = []
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === "*") {
            let v1 = stack.pop();
            i++;
            let v2 = arr[i]
            stack.push(v1 * v2)
        } else if (arr[i] === "/") {
            let v1 = stack.pop();
            i++;
            let v2 = arr[i]
            stack.push(Math.floor(v1 / v2))
        } else {
            stack.push(arr[i])
        }
    }

    stack.reverse()
    while (stack.length) {
        if (stack.length === 1) return stack[0]
        let v1 = stack.pop();
        let opt = stack.pop();
        let v2 = stack.pop();
        if (opt === "-") stack.push(v1 - v2)
        if (opt === "+") stack.push(v1 + v2)
    }

};
console.log(calculate(" 3+50 / 2 "))
// "3+2*2"
/*
    [3 + 2 * 2]
    [3 + 4]
  v1 = 2 v2 = 2  


*/