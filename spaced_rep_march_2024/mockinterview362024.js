// Company workers use key-cards to unlock office doors. Each time a worker uses their key-card, the security system saves the worker's name and the time when it was used. 
// The system emits an alert if any worker uses the key-card three or more times in a one-hour period.

// You are given a list of strings keyName and keyTime where [keyName[i], keyTime[i]] corresponds to a person's name and the time when their 
// key-card was used in a single day.

// Access times are given in the 24-hour time format "HH:MM", such as "23:51" and "09:49".

// Return a list of unique worker names who received an alert for frequent keycard use. Sort the names in ascending order alphabetically.

// Notice that "10:00" - "11:00" is considered to be within a one-hour period, while "22:51" - "23:52" is not considered to be within a one-hour period.


	//input:
	// String[] keyName = {"dan", "dan", "dan", "dan", "luis", "luis"};




	// String[] keyTime = {"01:00", "10:15", "3:30", "10:00", "10:15", "11:31"};

	// output = {"dan"};

// dan: {"01:00", "3:30", "10:00",  "10:15", "10:15", "11:31"};


// 	keyName =
// ["a","a","a","a","a","a","b","b","b","b","b"]
// keyTime =
// ["23:27","03:14","12:57","13:35","13:18","21:58","22:39","10:49","19:37","14:14","10:41"]

// output: {"a"}


/**
 
 O(n + m * (m * log(m))
 
 O(n * (n * log(n))) 
 + 1p + 2p + 3p
   
   Dan : ["10:00", "10:15", "10:30"]
 
/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function(keyName, keyTime) {
	const adjList = new Map(), result = []
  
  for (let i = 0; i < keyName.length; i++) { // Time : O(n)
    const n = keyName[i], v = keyTime[i]
    if (!adjList.has(n)) adjList.set(n, [])
    adjList.get(n).push(v)
  }
  
  for (let [name, times] of adjList) {
    times.sort((a, b) => a - b); // ideally account for colon
    
    for (let j = 0; j < times.length-2; j++) {
      let v1 = times[j], v2 = times[j+1], v3 = times[j+2]
      let arr = [v2, v3]
      let v1Arr = v1.split(":")
      let v1F = parseInt(v1Arr[0]), v1L = parseInt(v1Arr[1])
      let v1Value = (v1F * 60) + v1L
      let answer = arr.filter(t => {
        let tArr = t.split(":")
      	let tF = parseInt(tArr[0]), tL = parseInt(tArr[1])
        let tValue = (tF * 60) + tL
        
        return (tValue - v1Value) <= 60
      })

      if (answer.length === 2) {
        result.push(name)
        break;
      }
    }
  }
  return result;
};

      // 12:57
      // 13:35
      // 1   35-27 = -8
      // 1 = 60 - 8 = 52





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


var Logger = function() {
    this.map = new Map(); // constant
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
// Time :O(1)
// Space: O(m)...number of messages

// Logger Rate Limiter

Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (!map.has(message)) {
      map.set(message, timestamp)
      return true;
    } else {
      let value = map.get(message) + 10
      if (value > timestamp) {
        return false
      } else {
        map.set(message, timestamp)
        return true
      }
    }
};
//    MAP:
//  "foo" : 1   // true
//  "bar" : 2   // true
//  "foo" : 3  (1+10)// false
//     "foo" : 11 1+10
//   "fee": 11

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */



