
// Time: O(n)...for s.length
// SpacE: O(1)...we cap our nums variable at 32 bits
var myAtoi = function(s) {
    let result = 0, max = 2**31, positive = true, i = 0, len = s.length, nums = ''
    const ints = new Set(['0','1','2','3','4','5','6','7','8','9'])
    while (i < len) { // handle empty space at beginning
        if (s[i] === ' ') {
            i++
        } else { break}
    }
    if (i === len) return result;
    
    if (s[i] === '-' || s[i] === '+') { // handle negative or + symbol
        let next = s[i+1]
        if (!ints.has(next)) return 0
        if (s[i] === '-') positive = false;
        i++;
    }

    while (i < len) { // filter out leading zeros
        if (s[i] === '0') {
            i++
        } else {break}
    }
    if (i === len) {
        if (!positive) return '-0'
        return '0'
    }

    while (i < len) { // collect numbers
        if (!ints.has(s[i])) break;
        nums += s[i];
        i++
        if (nums.length > 32) break
    }

    for (let j = nums.length-1; j >= 0; j--) { // convert to integer
        let carry = 10**(nums.length-1 - j);
        let val = nums[j].charCodeAt() - 48
        result += (val * carry)
    }

    if (!positive && -result <= -max) return -max
    if (result > max-1) return max-1
    if (!positive) return -result
    return result;
};
console.log(myAtoi("    -00042")) // = -42