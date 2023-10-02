function solve(...args) {
    let obj = {};

    // sum while looping the arguments
    args.forEach((arg) => {
        const typeOfArg = typeof arg;
        console.log(`${typeOfArg}: ${arg}`);

        obj[typeOfArg] = obj[typeOfArg] 
            ? (obj[typeOfArg] += 1)
            : (obj[typeOfArg] = 1);
    });

    // sort in DESC
    const sortedInDscOrder = Object.entries(obj).sort((a, b) => b[1] - a[1]);

    // print
    sortedInDscOrder . forEach(([key, value]) => {
        console.log(`${key} = ${value}`);
    })
}

solve('cat', 42, function () { console.log('Hello world!'); });
