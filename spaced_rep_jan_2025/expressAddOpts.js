/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    let result = [], len = num.length;

    const backtrack = (idx, curr, prev, arr) => {
        if (idx === len) {
            if (curr === target) result.push([...arr]);
            return;
        }

        for (let i = idx; i < len; i++) {
            let v = parseInt(num.substring(idx, i + 1));
            if (idx !== 0 && num[idx] === '0') break; // avoid leading zeroes

            if (!arr.length) {
                backtrack(i + 1, v, v, [v]);
            } else {
                // add
                arr.push("+", v);
                backtrack(i + 1, curr + v, v, arr);
                arr.pop(); arr.pop();

                // subtract
                arr.push("-", v);
                backtrack(i + 1, curr - v, -v, arr);
                arr.pop(); arr.pop();

                // multiply
                arr.push("*", v);
                backtrack(i + 1, curr - prev + prev * v, prev * v, arr);
                arr.pop(); arr.pop();
            }
        }
    }

    backtrack(0, 0, 0, []);
    return result;
};
console.log(addOperators(num = "123", target = 6))