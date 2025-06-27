/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = []
    let items = path.split("/")

    for (let item of items) {
        if (item === "." || item === ' ' || item === "") {
            continue;
        } else if (item === "..") {
            stack.pop()
        } else {
            stack.push(item)
        }
    }

    return "/" + stack.join("/");
};
console.log(simplifyPath("/home/"))