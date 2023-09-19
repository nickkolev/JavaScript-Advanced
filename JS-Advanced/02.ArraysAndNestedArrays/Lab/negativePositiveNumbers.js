function solve(arr) {

    let result = [];
    for (const number of arr) {
        if(number < 0) {
            result.unshift(number);
        } else {
            result.push(number);
        }
    }

    console.log(result.join('\n'));
}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);