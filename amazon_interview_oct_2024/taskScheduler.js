/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
function leastInterval(tasks, n) {
    const taskFrequency = {};
    for (const task of tasks) {
      taskFrequency[task] = (taskFrequency[task] || 0) + 1;
    }
    
    const maxFrequency = Math.max(...Object.values(taskFrequency));
    let minIntervals = (maxFrequency - 1) * (n + 1);
    
    for (const task in taskFrequency) {
      const frequency = taskFrequency[task];
      minIntervals += frequency;
    }
    
    return minIntervals;
  }
console.log(leastInterval( ["B","C","D","A","A","A","A","G"], n = 1))