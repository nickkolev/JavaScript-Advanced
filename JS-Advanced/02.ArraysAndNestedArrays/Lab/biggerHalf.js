function solve(arr) {

    let middleIndex = Math.floor(arr.length / 2);
    return arr.sort((a,b) => a - b).slice(middleIndex, arr.length);
}

solve([3, 19, 14, 7, 2, 19, 6]);