function solve(n, k) {

    const arr = [1];

    for (let i = 1; i < n; i++) {
        let tempArray = arr.slice(-k);
        let sum = 0;

        for (let j = 0; j < tempArray.length; j++) {
            sum += tempArray[j];  
        }

        arr.push(sum);
    }

    return arr;
}

solve(6, 3);
solve(8, 2);