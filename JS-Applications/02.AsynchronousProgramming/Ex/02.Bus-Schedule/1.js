function solve() {

    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    const infoBox = document.getElementById('info');
    
    let stopId = 'depot';
    const url = `http://localhost:3030/jsonstore/bus/schedule/${stopId}`;
    
    function depart() {

        fetch(url)
            .then((res) => {
                if(res.status !== 200) {
                    throw new Error('Wrong status code');
                }

                return res.json();
            })
            .then((data) => {
                infoBox.textContent = `Next stop ${data.name}`;

                //disable Depart btn
                departBtn.disabled = true;

                //enable Arrive btn
                arriveBtn.disabled = false;
            })
            .catch(error => {
                departBtn.disabled = true;
                arriveBtn.disabled = true;
                infoField.textContent = error.message;
            })
    }

    function arrive() {
        fetch(url)
        .then((res) => {
            if(res.status !== 200) {
                throw new Error('Wrong status code');
            }

            return res.json();
        })
        .then((data) => {
            infoBox.textContent = `Arriving at ${data.name}`;

            //disable Depart btn
            departBtn.disabled = false;

            //enable Arrive btn
            arriveBtn.disabled = true;

            stopId = data.next;
        })
        .catch(error => {
            departBtn.disabled = true;
            arriveBtn.disabled = true;
            infoField.textContent = error.message;
        })
    }

 return {
        depart,
        arrive
    };
}

let result = solve();