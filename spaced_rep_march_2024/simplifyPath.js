/**
 * @param {string} path
 * @return {string}
 */
// String Traversal
// Time: O(n)
// Space: O(1)...not counting output string
var simplifyPath = function(path) {
    let s = 0, p = '', n = path.length
    while (s < n && path[s] !== "/") s++;

    while (s < n) {
        if (path[s] === "/") {
            while (s < n && path[s+1] === "/") s++;
            if (s !== n-1 || (s === n-1 && !p)) p += path[s]
        } else if (path[s] === ".") {
            if (path[s+1] === "." && path[s+2] !== '.') {
                while (s < n && path[s] !== "/") s++;
                if (s !== n-1) p += path[s]
            } else if (path[s+1] === "." && path[s+2] === '.') {
                while (s < n && path[s] === ".") {path += path[s]; s++;}
            }
        } else {
            p += path[s]
        }
        s++;
    }

    return p
};
console.log(simplifyPath( "/home//foo/"))

// C:\Users\Owner\Documents