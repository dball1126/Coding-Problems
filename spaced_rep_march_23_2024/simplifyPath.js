/**
 * @param {string} path
 * @return {string}
 */
// Stack
// Time and Space: O(n)
var simplifyPath = function(path) {
    if (!path) return ""
    const arr = path.split("/")
    const stack = []

    for (let p of arr) {
        if (p === "" || p === ".") continue;
        if (p === "..") {
            if (stack.length) stack.pop()
        } else {
            stack.push(p)
        }
    }

    return "/"  + stack.join("/")
};
console.log(simplifyPath("/home//foo/")) //  "/home/foo"
