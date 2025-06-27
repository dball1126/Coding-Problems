/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const lines = []
    let currLine = [], curr = 0

    for (let i = 0; i <  words.length; i++) { // pre-processing
        let w = words[i]
        let offset = 1
        if ((w.length + curr) === maxWidth) offset = 0

        if ((w.length +offset)+ curr <= maxWidth) {
            currLine.push(w)
            curr += w.length +offset
        } else {
            lines.push([...currLine])
            curr = 0
            currLine = []
            curr += w.length + offset
            currLine.push(w)
        }
        if (i === words.length-1) lines.push(currLine)
    }

    for (let line of lines) {
        let sum =0
        line.forEach(ln => sum += ln.length)
        console.log(sum)
    }

    console.log(lines)
};
console.log(fullJustify(words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20))