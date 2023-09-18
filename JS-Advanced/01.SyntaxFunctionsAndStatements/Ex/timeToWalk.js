function solve(steps, footprint, speed) {
    let distanceInM = steps * footprint;
    let speedMetersInSec = speed / 3.6;
    let time = distanceInM / speedMetersInSec;
    let res = Math.floor(distanceInM / 500);

    let timeInMin = Math.floor(time / 60);
    let timeInSec = Math.round(time - (timeInMin * 60));
    timeInMin += res;
    let hours = Math.floor(timeInMin / 60);

    let hoursToPrint = hours < 10 ? `0${hours}` : `${hours}`;
    let minToPrint = (timeInMin % 60);
    minToPrint = minToPrint < 10 ? `0${minToPrint}` : `${minToPrint}`;
    let secToPrint = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`;

    console.log(`${hoursToPrint}:${minToPrint}:${secToPrint}`);

}

solve(4000, 0.60, 5)