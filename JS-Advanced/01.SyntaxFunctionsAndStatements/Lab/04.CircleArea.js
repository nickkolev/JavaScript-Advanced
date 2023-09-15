function solve(arg) {

    let inputType = typeof(arg);
    if(inputType === 'number') {
        let area = Math.pow(arg, 2) * Math.PI;
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}


solve('name');
solve(5);