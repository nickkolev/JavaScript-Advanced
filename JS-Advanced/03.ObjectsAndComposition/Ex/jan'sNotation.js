function solve(input) {

    // Declare dictionary with operands and methods
    const calcMap = {
        '+': (a, b) => a + b,
        '-': (a, b) => b - a,
        '*': (a, b) => a * b,
        '/': (a, b) => b / a,
    };

    const clonedArr = [...input];
    const numbers = [];

    for (let i = 0; i <= input.length; i++) {
        if(i === input.length) {
            if(numbers.length === 1) {
                console.log(numbers[0]);
                return numbers[0];
            }
            console.log('Error: too many operands!');
            return 'Error: too many operands!';
        }

        if(typeof clonedArr[i] === 'number') {
            numbers.push(clonedArr[i]);
        } else {
            const operand = clonedArr[i];

            if(numbers.length < 2) {
                return 'Error: not enough operands!';
            } else {
                const numA = numbers.pop();
                const numB = numbers.pop();
                const result = calcMap[operand](numA, numB);

                numbers.push(result);
            }
        } 
    }
}

solve([3, 4, '+']);
solve([5, 3, 4, '*', '-']);
solve([7, 33, 8, '-']);
solve([15, '/']);