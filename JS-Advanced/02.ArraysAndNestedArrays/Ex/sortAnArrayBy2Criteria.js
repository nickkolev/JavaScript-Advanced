function solve(arr) {

    arr.sort((a,b) => a.length - b.length || a.localeCompare(b))
        .forEach(word => {
            console.log(word);
        });
}

solve(['alpha', 
'beta', 
'gamma']
);
console.log('----------');
solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
);
console.log('----------');
solve(['test', 
'Deny', 
'omen', 
'Default']
);