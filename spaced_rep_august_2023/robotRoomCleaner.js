/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 * 
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void} 
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {Robot} robot
 * @return {void}
 */
var cleanRoom = function(robot) {
    let pos = "up"
    const visited = new Set(), dirMap = new Map([["up", [-1, 0]], ["right", [0, 1]], ["down", [1, 0]], ["left", [0, -1]]])
    const dirs = ["up", "right", "down", "left"]
    const handlePosition = (target) => {
        while (pos !== target) {
            robot.moveRight();
            switch (pos) {
                case "up":
                    pos = "right"
                    break;
                case "down":
                    pos = "left"
                    break;
                case "left":
                    pos = "up"
                    break;
                case "right":
                    pos = "down"
                    break;
            }
        }
    }
    const backtrack = (r, c) => {
        let key = r + "" + c
        const copy = pos
        robot.clean()
        visited.add(key)
        let didWeMove = false

       dirs.forEach(d => {
            let [x, y] = dirMap.get(d)
            let key2 = (r + x) + "" + (c + y)
            if (!visited.has(key2)) {
                visited.add(key2)
                handlePosition(d)
                if (robot.move()) {
                    backtrack(r+x, c+y)
                    didWeMove = true
                }
            }
       })
       // go back
       if (didWeMove) {
           if (copy === "right") {
            target = "left"
           } else if (copy === "down") {
            target = "up"
           } else if (copy === "left") {
            target = "right"
           } else if (copy === "up") {
            target = "down"
           }
           handlePosition(target)
           robot.move()
       }
    }
    backtrack(0, 0)
};


// [[2,2,2,2,2,0,1,1],[1,1,1,2,1,0,1,1],[1,0,1,1,1,1,1,1],[0,0,0,1,0,0,0,0],[1,1,1,1,1,1,1,1]]


{'00', '-10', '-20', '-11', '-21', '-12', '-1-1', '-2-1',
 '-1-2', '-2-2', '-1-3', '-2-3', '-1-4', '-2-4', '-1-5', 
 '01', '02', '03', '-13', '04', '-14', '05', '0-1', '0-2', '0-3', '0-4'}