/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
// Stack
// Time and Space: O(n)
var asteroidCollision = function(asteroids) {
    const stack = [];
    for (let asteroid of asteroids) {
        const val = Math.abs(asteroid);
        if (asteroid > 0) {
            stack.push(asteroid);
        } else {
            let destroyed = false
                while(stack.length) {
                    let topValue = stack[stack.length-1];
                    let absValue = Math.abs(topValue);
                    if (topValue > 0) {
                        if (absValue === val) {
                            stack.pop(); destroyed = true;
                            break;
                        } else if (absValue < val) {
                            stack.pop();
                        } else {
                            destroyed = true;
                            break;
                        }
                    } else {
                        break;
                    }
                }
            if (!destroyed) stack.push(asteroid)
        }
    }
    return stack;
};
console.log(asteroidCollision(asteroids = [10,2,-5])) // = [10]
