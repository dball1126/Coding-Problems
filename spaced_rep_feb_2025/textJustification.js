/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let result = [], currWidth = 0, currArr = [];

    words.forEach((word) => {

        let len = word.length, wrdCount = 0;
        if (currArr.length) wrdCount = currArr.length;
        if ((len + wrdCount + currWidth) > maxWidth) {
            let spaces = maxWidth - currWidth
            if (currArr.length === 1) {
                let newStr = currArr.pop();
                while (newStr.length < maxWidth) newStr += " ";
                result.push(newStr);
            } else if (currArr.length === 2) {
                result.push(currArr[0] + " ".repeat(spaces) + currArr[1])
            } else {
                let even = Math.floor(spaces / (currArr.length-1));
                let odd = spaces % (currArr.length-1);
                let str = "";
                currArr.forEach(wrd => {
                    if (spaces) {
                        str += (wrd + " ".repeat(even))
                        
                        if (odd) {
                            str += " "
                            odd--;
                            spaces--;
                        }
                        spaces -= even;
                    } else {
                        str += wrd;
                    }
                })
                result.push(str)
            }
            currArr = []
            currWidth = 0
        }
        currWidth += len;
        currArr.push(word)
    })
    if (currArr.length){
        let newStr = currArr.join(" ");
        while (newStr.length < maxWidth) newStr += " ";
        result.push(newStr)
    }
    return result;
};
console.log(fullJustify(
    ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
));