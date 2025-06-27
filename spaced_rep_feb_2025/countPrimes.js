/**
 * @param {number} n
 * @return {number}
 */
// Sieve of Eratosthenes
// Time: O(n * log(n))
// Space: O(n)
var countPrimes = function(n) {
    const primes = [...new Array(n)].fill(true);
    primes[0] = false; primes[1] = false;

    for (let i = 2; i < n; i++) {
        let j = i;
        while (j+i < n) {
            j+= i;
            primes[j] = false;
        }
    }
    let count = 0;
    primes.forEach(v => {
        if (v) count++;
    })
    return count;
};
console.log(countPrimes(10))