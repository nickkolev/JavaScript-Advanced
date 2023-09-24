function solve(input) {

    let car = {...input};
    //car power
    if(car.power <= 90) {
        car.engine = {'power': 90, 'volume': 1800};
    } else if (car.power <= 120) {
        car.engine = {'power': 120, 'volume': 2400};
    } else if (car.power <= 200) {
        car.engine = {'power': 200, 'volume': 3500};
    }
    delete car.power;

    //car carriage
    car.carriage = {'type': car.carriage, 'color': car.color};
    delete car.color;

    //car wheels
    if(car.wheelsize % 2 === 0) {
        car.wheelsize--;
    }
    car.wheels = [car.wheelsize, car.wheelsize, car.wheelsize, car.wheelsize];

    //console.log(car);
    return car;
}

solve({
    model: 'Brichka',
    power: 65,
    color: 'white',
    carriage: 'hatchback',
    wheelsize: 16
});