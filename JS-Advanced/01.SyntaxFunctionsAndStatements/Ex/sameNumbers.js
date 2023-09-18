function solve(num) {

    let sum = 0;
    let sameNumbers = true;

    let numberAsString = num.toString();
    let firstDigit = numberAsString[0];

    for (let i = 0; i < numberAsString.length; i++) {
        if (numberAsString[i] !== firstDigit) {
            sameNumbers = false;
        }

        sum += Number(numberAsString[i]);
    }

    console.log(sameNumbers);
    console.log(sum);
}

solve(2222222)
solve(1234)