function solve(input) {

    let result = {};
    for (let i = 0; i < input.length - 1; i += 2) {

        let product = input[i];
        let calories = Number(input[i + 1]);

        result[product] = calories;
    }

    console.log(result);
}

solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);