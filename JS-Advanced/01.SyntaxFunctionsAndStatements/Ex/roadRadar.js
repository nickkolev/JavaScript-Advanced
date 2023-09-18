function solve(speed, area) {

    let speedLimit = 0;

    switch (area) {
        case 'motorway':
            speedLimit = 130;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'city':
            speedLimit = 50;
            break;
        case 'residential':
            speedLimit = 20;
        default:
            break;
    }

    let overTheLimit = speed - speedLimit;

    let status = '';

    if (overTheLimit <= 0) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    } else if (overTheLimit <= 20) {
        console.log(`The speed is ${overTheLimit} km/h faster than the allowed speed of ${speedLimit} - speeding`)
    } else if (overTheLimit <= 40) {
        console.log(`The speed is ${overTheLimit} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`)
    } else {
        console.log(`The speed is ${overTheLimit} km/h faster than the allowed speed of ${speedLimit} - reckless driving`)
    }

}

solve(200, 'motorway');
solve(120, 'interstate');
solve(21, 'residential');
solve(40, 'city');