/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let wrds = [], n = words.length, c = 0, curr = [];
    for (let i = 0; i < words.length; i++) { // collect words by maxWidth
        let v = words[i]
        if (!curr.length) {
            curr.push(v)
            c = v.length
        }
        else if ((v.length + c + 1) > maxWidth) {
            wrds.push([...curr])
            curr = []
            curr.push(v)
            c = v.length
        } else {
            curr.push(v)
            c += (v.length + 1)
        }
        if (i+1 >= n) {
            wrds.push(curr)
        }
    }
    const addSpaces = (str, amt) => {
        while (amt > 0) {
            str += " "
            amt--
        }
        return str;
    }
    for (let idx = 0; idx < wrds.length; idx++) { // transform each lidxne idxnto a stridxng
        let arr = wrds[idx], len = 0, curr = ''

        arr.forEach(v => len += v.length)
        let spaces = maxWidth - len, wLen = arr.length;

        for (let i = 0; i < arr.length; i++) {
            let w = arr[i]
            if (idx === wrds.length-1) {
                if (i === 0) {
                    curr += w
                } else {
                    curr += " " + w
                    spaces--
                }
                if (i === arr.length-1) {
                    curr = addSpaces(curr, spaces)
                }
                continue;
            }

            if (!curr) {
                curr += w;
                wLen--
                if (!wLen) curr = addSpaces(curr, spaces)
            } else if (!wLen) {
                curr += w;
                curr = addSpaces(curr, spaces)
            } else if (i !== 0) {
                let s = Math.ceil(spaces / wLen)
                curr = addSpaces(curr, s)
                curr += w
                wLen--
                spaces -= s
            }
        }
       wrds[idx] = curr
    }
    return wrds;
};

console.log(fullJustify(words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20))