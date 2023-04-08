/**
 * Time and Space: O(n)
 */
const recursiveMultiply = (n, m) => {
    if (!n || !m) return n + m;
    const multiply = (num) => {
        if (num === 1) return n
        if (num & 1) return n + multiply(Math.floor(num / 2)) + multiply(Math.floor(num / 2))
        
        return multiply(Math.floor(num / 2)) + multiply(Math.floor(num / 2))
    }
    return multiply(m)
}
console.log(recursiveMultiply(10,10))
