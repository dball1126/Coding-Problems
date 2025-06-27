// Time: O(n * log(n))
// Space: O(n)
var isNStraightHand = function(hand, groupSize) {
    hand.sort((a, b) =>  a - b)
    if (hand.length % groupSize !== 0) return false;
    const curr = [...new Array(hand.length / groupSize)].map(a => new Array())
    const result = []
    for (let i = 0; i < hand.length; i++) {
        if (curr[0].length && curr[0][curr[0].length-1] === hand[i]) return false
        let temp = hand[i]
        let idx = 0;
        while (i+1 < hand.length && hand[i+1] === hand[i]) {
            i++; idx++
            if (!curr[idx]) return false
            if (curr[idx].length && curr[idx][curr[idx].length-1] === hand[i]) return false
            if (curr[idx].length && curr[idx][curr[idx].length-1]+1 !== hand[i]) return false;
            curr[idx].push(hand[i])
        }
        if (curr[0].length && curr[0][curr[0].length-1]+1 !== temp) return false;
        curr[0].push(temp)
        while (curr[0] && curr[0].length === groupSize) {result.push(curr.shift())}
    }
    return result.length === hand.length / groupSize && !curr.length;
};
console.log(isNStraightHand(hand = [1,2,3,4,5], groupSize = 4)) // = false
