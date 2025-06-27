/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let open = 0, close = 0, opt = 0

    for (let i = 0; i < s.length; i++) {

        if (s[i] === "(") {
            open++
        } else if (s[i] === "*") {
            opt++
        } else {
            close++
        }

        if (close > open) {
            let diff = (close - open) 
            console.log("diff " + diff)
            if (diff < 0){
                return false;
            } else {
                opt -= diff
                open += diff
            }
        }
    }
    if (open > close) {
        let diff = (open - close) 
        if (diff < 0){
            return false;
        } else {
            opt -= diff
            close += diff
        }
    }
    console.log("close: " + close + " open: " + open + " opt: " + opt)
    return (close % 2 === 0 && open % 2 === 0 && opt % 2 === 0)
};
console.log(checkValidString("(*))"))