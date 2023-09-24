function solve(heroesArray) {

    let output = [];

    for (const hero of heroesArray) {
        let data = hero.split(' / ');

        let name = data[0];
        let level = Number(data[1]);
        let items = data[2] ? data[2].split(', ') : [];

        output.push({name, level, items});
    }

    console.log(JSON.stringify(output));
}

solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 ']);