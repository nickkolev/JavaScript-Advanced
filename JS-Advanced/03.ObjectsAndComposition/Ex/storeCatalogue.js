function solve(input) {
    let result = input.sort((a, b) => a.localeCompare(b));

    let currentChar = '';

    for (let i = 0; i < result.length; i++) {
        if(currentChar !== result[i].charAt(0)) {
            currentChar = result[i].charAt(0);
            console.log(currentChar);
            i--;
        } else {
            let [name, price] = result[i].split(' : ');
            console.log(`  ${name}: ${price}`);
        }
    }
}

solve(['Appricot : 20.4','Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);