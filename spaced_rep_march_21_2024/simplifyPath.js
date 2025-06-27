/**
 * @param {string} path
 * @return {string}
 */
// Stack
// Time and Space: O(n)
var simplifyPath = function(path) {
    if (!path) return path;
    const stack = [], n = path.length
    const top = () => stack[stack.length-1]

    for (let i = 0; i < n; i++) {
        let v = path[i]
        if (v === "/") {
            if (top() !== "/") stack.push(v)
        } else if (v === ".") {
            // handle 3 edge cases
            let nx1 = path[i+1], nx2 = path[i+2]
            let count = 0
            if (nx1 !== ".") { // only one dot
                let prev = ""
                while (stack.length && count >= 1 && top() === "/") {
                    let value = stack.pop()
                    if (value === "/") {
                        count++
                        prev = value
                    }
                }
                if (!stack.length && prev) stack.push(prev)
            } else if (nx1 === "." && nx2 !== ".") { // only 2 dots
                while (stack.length && count !== 2) {
                    let value = stack.pop()
                    if (value === "/") {
                        count++
                        prev = value
                    }
                }
                if (!stack.length && prev) stack.push(prev)
            } else { // 3 or more dots
                while(path[i] === '.') {
                    stack.push(path[i])
                    i++
                }
            }

        } else {
            stack.push(v)
        }
    }

    if (stack.length === 1) return stack[0]
    if (top() === '/') stack.pop()
    return stack.join("")
};
console.log(simplifyPath("/.."))
// path = "/a/./b/../../c/"
// step 1: "/a"
// step 2 "/a"
// step 3: /a/
// step 4: []
// step 5 /c/
// return /c