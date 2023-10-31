function solve() {

    const label = document.querySelector('.info');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    let stop = {
        next: 'depot',
    };

    async function depart() {
        // disable depart button
        departBtn.disabled = true;

        // get info for next stop
        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
        const res = await fetch(url);

        stop = await res.json();

        // display next stop
        label.textContent = `Next stop ${stop.name}`;

        // enable arrive button
        arriveBtn.disabled = false;
    }

    function arrive() {
        // disable arrive button
        arriveBtn.disabled = true;

        // display arrived at stop
        label.textContent = `Arriving at ${stop.name}`;

        // disable depart button
        departBtn.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();