/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    let max = 1
    
    envelopes.sort((a,b) => {
        return a[0] - b[0] || a[1] - b[1];
    })
    let [x, y] = envelopes[envelopes.length-1];
    for (let i = envelopes.length-2; i >= 0; i--) {
        const [cx, cy] = envelopes[i];

        if (cx < x && cy < y) {
            max++;
            x = cx;
            y = cy;
        }
    }
    return max;
};
console.log(maxEnvelopes([[46,89],[50,53],[52,68],[72,45],[77,81]]

))

