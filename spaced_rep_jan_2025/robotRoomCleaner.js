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
    let visited = new Set();

    let handleDir = (d, req, robot) => {
        while (d !== req) {
            if (d === 'up') {
                d = 'left';
            } else if (d === 'down') {
                d = 'right'
            } else if ( d === 'right') {
                d = 'up'
            } else if ( d === 'left') {
                d = 'down'
            }
            robot.turnLeft();
        }
     
    }
  
    const traverse = (robot, r , c, dir) => {
        let key = r  + ':' + c

        robot.clean();
        visited.add(key);
        key = (r -1) + ":" + c
        if (!visited.has(key)) {
            visited.add(key)
            handleDir(dir, 'up', robot);
            if (robot.move()) {
                traverse(robot, r -1, c, 'up')
                handleDir(dir, 'down', robot)
                robot.move();
            }
        }
        key = r + ":" + (c-1)
        if (!visited.has(key)) {
            visited.add(key)
            handleDir(dir, 'left', robot)
            if (robot.move()) {
                traverse(robot, r, c-1, 'left')
                handleDir(dir, 'right', robot)
                robot.move();
            }
        }
        key = (r + 1) + ":" + c
        if (!visited.has(key)) {
            visited.add(key)

            handleDir(dir, 'down', robot)
            if (robot.move()) {
                traverse(robot, r+1, c, 'down')
                handleDir(dir, 'up', robot)
                robot.move()
            }

        }
        key = r + ":" + (c + 1)
        if (!visited.has(key)) {
            visited.add(key)
            handleDir(dir, 'right', robot)
            if (robot.move()) {
                traverse(robot, r, c + 1, 'right')
                handleDir(dir , 'left', robot)
                robot.move()
            }
        }
    }

    traverse(robot, 0, 0, 'up');

};