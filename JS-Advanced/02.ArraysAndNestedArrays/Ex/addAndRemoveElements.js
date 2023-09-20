function solve(commands) {

    let number = 0;
    let result = [];

    commands.forEach((command) => {
        number++;
        if(command === 'add') {
            return result.push(number);
        }
        return result.pop();
    })

    result.length > 0 ? console.log(result.join("\n")) : console.log("Empty");
}

solve(['add', 
'add', 
'add', 
'add']
);

console.log("----------------")
solve(['add', 
'add', 
'remove', 
'add', 
'add']
);

console.log("----------------")
solve(['remove', 
'remove', 
'remove']
);