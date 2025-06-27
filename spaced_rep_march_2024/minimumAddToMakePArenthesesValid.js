/**
 * @param {string} s
 * @return {number}
 */
// Two variable approach...we can use a stack too.
// TIme: O(n)
// Space: O(1)
var minAddToMakeValid = function(str) {
    let open = 0, close = 0, add = 0

    for(let i = 0; i < str.length; i++)  {
        let v = str[i]

        if (v === ')' && open <= close) {
            add++
        } else {
            v === "(" ? open++ : close++
        }
    }
    if (open !== close) return add + (open - close)
    return add
};
console.log(minAddToMakeValid(s = "(((")) // = 3


