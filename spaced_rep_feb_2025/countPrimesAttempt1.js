/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const primes = [...new Array(n)].fill(true);
    primes[0] = false;
    primes[1] = false;
    let count = 0;

    for (let i = 2; i < n; i++) {
        if (primes[i]) {
            count++;
            let j = i, k = i;
            while (k + i < n) {
                j *= i;
                k += i;
                primes[k] = false;
                if (j < n) primes[j] = false;
            }
        }
    }
    return count;
};
console.log(countPrimes(10))
