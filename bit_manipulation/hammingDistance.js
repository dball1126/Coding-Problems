/**
 * shift bits to the right until both inputs are zero
 * Time and Space: O(1)...32 bits max
 */
 var hammingDistance = function(x, y) {
     if (x === y) return 0
    let distance = 0;
    while (x !== 0 || y !== 0) {
        if ((x & 1) !== (y & 1)) {
            distance++
        }
        x >>= 1
        y >>= 1
    }
    return distance
};

console.log(hammingDistance(4, 1))


// /**
//  * Time and Space: O(1)...32 bits max
//  */
//  var hammingDistance = function(x, y) {
//     if (x === y) return 0
//    let distance = 0;
//    for (let i = 0; i < 32; i++) {
//        let mask = 1 << i;
//        if ((x & mask) !== (y & mask)) distance++;
//    }
//    return distance
// };

// console.log(hammingDistance(3, 1))