function solve(input) {

    if(input.length == 1) {
        return input[0];
    }

    let firstNumber = Number(input.shift())
    let lastNumber = Number(input.pop());

    let sum = firstNumber + lastNumber;

    return sum
}

solve(['20', '30', '40']);
solve(['5', '10']);