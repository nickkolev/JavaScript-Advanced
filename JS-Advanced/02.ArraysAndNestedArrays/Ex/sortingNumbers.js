function solve(arr) {

    let arrDesc = arr.sort((a,b) => b - a);

    let result = [];
    
    while(arrDesc.length > 1) {
        result.push(arrDesc.pop());
        result.push(arrDesc.shift());
    }

    if(arrDesc.length === 1) {
        result.push(arrDesc.pop());
    }

    return result;
}

solve([1, 65, 3]);