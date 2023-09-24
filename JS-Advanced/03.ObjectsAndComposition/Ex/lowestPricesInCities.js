function solve(input) {

    let result = [];

    for (const line of input) {
        const [town, productName, price] = line.split(' | ');

        if(result.some( obj => obj['productName'] === productName)) {
            let obj = result.find(e => e.productName === productName);

            if(obj.price > Number(price)) {
                obj.price = price;
                obj.town = town;
            }
        } else {
            let obj = {town, productName, price: Number(price)};
            result.push(obj);
        }
    }

    for (const obj of result) {
        console.log(`${obj.productName} -> ${obj.price} (${obj.town})`)
    }
}

solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'])