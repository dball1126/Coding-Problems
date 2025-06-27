/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    const stack = []
    const result = [...new Array(n)].fill(0)
    const top = () => stack[stack.length-1]
    let endTime = 0

    for (let i = 0; i < logs.length; i++) {
        const [id, option, time] = logs[i].split(":")

        if (option === "start") {
            if (stack.length && top()[1] === "start") {
                let [id1, option1, time1] = top()
                let value = parseInt(time) - time1;
                if (stack.length) {
                    top()[2] = parseInt(top()[2]) + value
                }     
                if (value > 0) {

                    
                    result[id1] += value
                }
            } 
            stack.push([id, option, time])
        } else {
            let [id1, option1, time1] = stack.pop()
            let value = parseInt(time);
            if (stack.length) {
                top()[2] = parseInt(top()[2]) + value
            }     
            if (value > 0) {
                result[id1] += value + 1
            }
        }
       
    }
    return result;
};

console.log(exclusiveTime(n = 2, logs = ["0:start:0","1:start:2","1:end:5","0:end:6"]))

/**all Time = 7
 * result = [2,4]
 * 
["0:start:0","1:start:2","1:end:5","0:end:6"]

step 1 [0 start 0]
step 2 [0 start 0], [1 start 2]
step 3 [1 end 5]   [1, start 2]

step 4 "0:end:6"
6 -0
 * 
 */