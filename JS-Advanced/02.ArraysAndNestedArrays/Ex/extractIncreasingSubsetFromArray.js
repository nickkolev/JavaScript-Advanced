function solve(nums) {

    let result = [];
    let biggestNumber = nums.shift();
    result.push(biggestNumber);

    nums.forEach(x => {
        if(x >= biggestNumber) {
            result.push(x);
            biggestNumber = x;
        }
    });

    return result;
} 


function solve2(data) {
    let biggestOne = Number.MIN_SAFE_INTEGER;
    return data.filter((x) => {
        if (x >= biggestOne) {
            biggestOne = x
            return true
        }
        return false
    })
}

function solve3(data) {
    let biggestOne = Number.MIN_SAFE_INTEGER;
    return data.reduce((acc, el) => {
        if(el >= biggestOne) {
            biggestOne = el;
            acc.push(el);
        }
        return acc
    }, [])
}