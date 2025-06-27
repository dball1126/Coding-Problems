/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    
    let order = path.split("/");
    let stack = [];

    for (let i = 0; i < order.length; i++) {
        if (order[i] === "" || order[i] === " " || order[i] === '.') {
            continue;
        } else if (order[i] === "..") {
            stack.pop();
        } else {
            stack.push(order[i]);
        }
    }

    return "/" + stack.join("/");
};