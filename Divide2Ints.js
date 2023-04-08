const divide2ints = (dividend, divider) => {
    let flag = false;
    let double = false;
    if (dividend < 0 || divider < 0 || (dividend < 0 && divider < 0)) {
        flag = true;
    } else {
        flag = false;
    }

    dividend = Math.abs(dividend);
    divider = Math.abs(divider);

    let count = 0;
    console.log(dividend)
    console.log(divider)
    while ( dividend >= divider){
        if (flag){
            count-=1;
        } else {
            count+=1;
        }
        dividend -= divider;
    }
    return count;
}

console.log(divide2ints(-1, -1))