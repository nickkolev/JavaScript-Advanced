function solve(pieFlavors, firstTarget, secondTarget) {

    let firstIndex = pieFlavors.indexOf(firstTarget);
    let secondIndex = pieFlavors.indexOf(secondTarget);

    return pieFlavors.slice(firstIndex, secondIndex + 1);
}

solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
)