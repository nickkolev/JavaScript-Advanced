function solve(numbers) {

    let result = [];
    
    for (let i = 1; i < numbers.length; i += 2) {
        result.push(numbers[i] * 2);
    }

    //return result.reverse().join(" ");

    
    
    return numbers.filter((num, index) => index % 2 === 1)
                  .map(n => n * 2)
                  .reverse()
                  .join(' ');

    
}

solve([3, 0, 10, 4, 7, 3]);
solve([10, 15, 20, 25]);