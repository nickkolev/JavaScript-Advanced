function solve(arr) {

    let biggestElements = [];
    for (let i = 0; i < arr.length; i++) {
        biggestElements.push(Math.max(...arr[i]));
    }

    console.log(Math.max(...biggestElements));
}

solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   );

solve([[20, 50, 10],
    [8, 33, 145]]
   );