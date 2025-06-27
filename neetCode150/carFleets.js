
// Stack
// Time: O(n * m)...n for elements in position(speed is the same size) and m for target
// Space: O(n)...for the stack/map of N elements
var carFleet = function(target, position, speed) {
    let stack = [], fleets = 0
    let level = []
    for (let i = 0; i < position.length; i++) {
        level.push([position[i], speed[i]])        
    }
    stack.push(level)

    while (stack.length) {
        let fleetsMapMin = new Map(), fleetsMapMax = new Map();
        let newLevel = stack.pop();
        if (newLevel.length === 1 && !stack.length) return fleets + 1;

        for (let [k, v] of newLevel) {
            let val = k + v
            if (val >= target) {
                if (!fleetsMapMax.has(val)) fleetsMapMax.set(val, v)
                fleetsMapMax.set(val, Math.min(fleetsMapMax.get(val), v))    
            } else {
                if (!fleetsMapMin.has(val)) fleetsMapMin.set(val, v)
                fleetsMapMin.set(val, Math.min(fleetsMapMin.get(val), v))    
            }
            
        }
        fleets += fleetsMapMax.size
        if (fleetsMapMin.has(target)) fleets++;
        fleetsMapMin.delete(target)
        if (fleetsMapMin.size) {
            stack.push(Array.from(fleetsMapMin))    
        }
    }
    return fleets;
};

console.log(carFleet(target = 10, position = [8,3,7,4,6,5], speed = [4,4,4,4,4,4]
    ))