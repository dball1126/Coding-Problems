/**
 * O(1)
 */
var getSum = function(n1, n2) {

    while (n2 !== 0) {
      let temp = n1
        n1 ^= n2
        n2 &= temp
        if (n2 !== 0) n2 <<= 1
    }
    return n1 | n2
};
console.log(getSum(2, -1))


