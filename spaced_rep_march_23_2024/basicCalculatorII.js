/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let arr = []
    for (let i = 0; i < s.length; i++) {
        let c = s[i]
        if (c !== " ") {
            if (c >= "0" && c <= "9") {
                let collect = c
                while (s[i+1] >= "0" && s[i+1] <= "9") {
                    i++
                    collect += s[i]
                }
                arr.push(parseInt(collect))
            } else {
                arr.push(c)
            }
        }
    }
    let stack = []
    for (let i = 0; i < arr.length; i++) {
        let v = arr[i]

        if (v === "+" || v === "-") {
            stack.push(v)
        } else if (v >= -Infinity && v <= Infinity) {
            stack.push(v)
        } else if (v === "*") {
            let v1 = stack.pop();
            i++
            let v2 = arr[i]
            stack.push(v1 * v2)
        } else if (v === "/") {
            let v1 = stack.pop();
            i++
            let v2 = arr[i]
            stack.push(Math.floor(v1 / v2))
        }
    }
    // turn stack into a queue
    stack.reverse()
    while (stack.length) {
        if (stack.length === 1) return stack[0]
        
        let v1 = stack.pop();
        let opt = stack.pop();
        let v2 = stack.pop();
        if (opt === "+") stack.push(v1 + v2)
        if (opt === "-") stack.push(v1 - v2)
    }

};
console.log(calculate("1*2-3/4+5*6-7*8+9/10"

))
// "3+4"
/**
   v2 = 4
   opt = +
   v1 = 3
 * 3 + 4 = 7
 */