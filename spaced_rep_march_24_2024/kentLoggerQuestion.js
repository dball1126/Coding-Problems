// Design a logger system that receives a stream of messages along with their timestamps. 
// Each unique message should only be printed at most every 10 seconds (i.e. a message printed at timestamp t will prevent other identical 
//         messages from being printed until timestamp t + 10).

// All messages will come in chronological order. Several messages may arrive at the same timestamp.

// Example 1:

// Input
// ["Logger", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage"]
// [[], [1, "foo"], [2, "bar"], [3, "foo"], [8, "bar"], [10, "foo"], [11, "foo"]]
// Output
// [null, true, true, false, false, false, true]

// Explanation
// Logger logger = new Logger();
// logger.shouldPrintMessage(1, "foo");  // return true, next allowed timestamp for "foo" is 1 + 10 = 11
// logger.shouldPrintMessage(2, "bar");  // return true, next allowed timestamp for "bar" is 2 + 10 = 12
// logger.shouldPrintMessage(3, "foo");  // 3 < 11, return false
// logger.shouldPrintMessage(8, "bar");  // 8 < 12, return false
// logger.shouldPrintMessage(10, "foo"); // 10 < 11, return false
// logger.shouldPrintMessage(11, "foo"); // 11 >= 11, return true, next allowed timestamp for "foo" is 11 + 10 = 21

// map of names and the messages 
//  return true if map is empty with name

// return true if map value + 10 >= the new value    ---> if it is, update the map value

class Logger {
    constructor() {
        this.logs = new Map()
    }

    shouldPrintMessages(time, message) {
        if (!this.logs.has(message)) {
            this.logs.set(message, time)
            return true;
        } else {
            let currentTime = this.logs.get(message)
            if (currentTime + 10 >= time) {
                return false;
            } else {
                this.logs.set(message, time)
                return true;
            }
        }
    }
}
const logger = new Logger()
console.log(logger.shouldPrintMessages(1, "foo"))
console.log(logger.shouldPrintMessages(2, "bar"))
console.log(logger.shouldPrintMessages(3, "foo"))