function solve(library, orders) {

    let result = [];

    for (const order of orders) {
        let product = order.template;

        for (const part of order.parts) {
            product[part] = library[part];
        }

        result.push(product);
    }

    return result;
}