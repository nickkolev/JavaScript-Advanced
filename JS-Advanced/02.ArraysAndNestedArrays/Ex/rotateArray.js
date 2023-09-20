function solve(arr, rotations) {
    let cycles = rotations % arr.length;

    for (let i = 1; i <= cycles; i++) {
        let temp = arr.pop();
        arr.unshift(temp);
    }

    console.log(arr.join(" "));
}

solve(['1', 
'2', 
'3', 
'4'], 
2
);

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);