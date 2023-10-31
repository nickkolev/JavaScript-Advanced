function getInfo() {
    const busId = document.getElementById("stopId").value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/` + busId;

    const stopNameElement = document.getElementById("stopName");
    const busesElement = document.getElementById("buses");

    const validIds = ["1287", "1308", "1327", "2334"];

    fetch(url)
        .then((res) => {
            if (res.status !== 200) {
                stopNameElement.textContent = "Error";
                busesElement.textContent = "";
                throw new Error("Wrong status code");
            }

            return res.json();
        })
        .then((data) => {
            stopNameElement.textContent = data.name;

            Object.entries(data.buses).map(([bus, time]) => {
                let busLi = document.createElement("li");
                busLi.textContent = `Bus ${bus} arrives in ${time} minutes`;
                busesElement.appendChild(busLi);
            });
        })
        .catch((err) => {
            stopNameElement.textContent = "Error";
            busesElement.textContent = "";
        });
}
