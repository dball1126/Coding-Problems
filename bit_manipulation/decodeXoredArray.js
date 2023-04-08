/** XOR...Bit Manipulation
 * Time: O(n), Space: O(1)
 */
var decode = function(encoded, first) {
    let curr = first;
    for (let i = 0; i < encoded.length; i++) {
        let temp = encoded[i];
        encoded[i] ^= curr
        curr ^= temp
    }
    encoded.unshift(first)
    return encoded
};
console.log(decode(encoded = [6,2,7,3], first = 4)) // =[ 4, 2, 0, 7, 4 ]
