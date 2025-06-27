/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
// Stack
// Time: O(n)
// Space: O(1)...if we don't count the output array
var asteroidCollision = function(asteroids) {
    const stack = [];
    const top = () => stack[stack.length-1];
    for (let asteroid of asteroids) {
        if (asteroid > 0) {
            stack.push(asteroid)
        } else {
            let destroyed = false;
            let val = Math.abs(asteroid)
            while (stack.length && top() > 0) {
                if (top() > val) {
                    destroyed = true; break;
                } else if (top() === val) {
                    destroyed = true; stack.pop(); break;
                } else {
                    stack.pop();
                }
            }
            if (!destroyed) stack.push(asteroid);
        }
    }
    return stack;
};
console.log(asteroidCollision(  [10,2,-5]))