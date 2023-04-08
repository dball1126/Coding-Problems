const minTimeDifference = (timepoints) => {
    timepoints = timepoints.map(n => convert(n)).sort((a, b) => a -b);
    let count = Infinity;
    let t1, t2, d1, d2;
    for (let i = 0; i < timepoints.length-1; i++) {
        t1 = timepoints[i]
        t2 = timepoints[i+1];
        d1 = Math.abs(t1 -t2);
        d2 = Math.abs((t1+1440) - t2);
        count = Math.min(d1, d2, count);            
    }

    // check first and last elements (smallest and largest)
    t1 = timepoints[0];
    t2 = timepoints[timepoints.length-1];
    d1 = Math.abs(t1-t2);
    d2 = Math.abs((t1 + 1440) - t2)
    count = Math.min(d1, d2, count)

    return count;
}

const convert = (time) => {
    if (time === '00:00') return 1440;
    time = time.split(":");
    let hours = parseInt(time[0]) * 60;
    let mins = parseInt(time[1]);
    return hours + mins;
}

console.log(minTimeDifference(["07:56","19:58","19:12","01:59","04:27"]))
// if num > 720
// 09:35           