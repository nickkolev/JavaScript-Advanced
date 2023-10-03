function solve(arr, start, end) {

    // error handling
    if(!Array.isArray(arr)) {
        return NaN;
    }

    let startIndex = Math.max(0, start);
    let endIndex = Math.min(arr.length - 1, end);

    let sum = 0;
    
    for (let i = startIndex; i < endIndex + 1; i++) {
        sum += Number(arr[i]);
    }

    return sum;
}

solve([10, 20, 30, 40, 50, 60], 3, 300);
solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
solve([10, 'twenty', 30, 40], 0, 2);
solve([], 1, 2);