/**
 * @param {string} s
 * @return {string}
 */
// Two variables and 2 passes
// Time & Space: O(n)  2n = O(n)
var minRemoveToMakeValid = function(s) {
    let open = 0, close = 0, str = ""
    
    for (let c of s) { // handle closed brackets // O(n)
        if (c === ")") {
            if (open <= close) continue;
            
            str += c
            close++;
        } else if (c === "(") {
            open++
            str += c
        } else {
            str += c
        }
    }
    close = 0, open = 0;
    let returnStr = ""
    for (let i = str.length-1; i >= 0; i--) { // handle open brackets // O(n)
        let c = str[i]
        if (c === '(') {
            if (close <= open) continue;

            returnStr =  c + returnStr
            open++
        } else if (c === ")") {
            close++
            returnStr = c + returnStr
        } else {
            returnStr = c + returnStr
        }
    }
    return returnStr;
};
console.log(minRemoveToMakeValid("lee(t(c)o)de)")) // = "lee(t(c)o)de"
// "a(b(c)d"

// "ab((c)d"
// "d"
// ")d"
// ""