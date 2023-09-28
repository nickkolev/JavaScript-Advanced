function attachEventsListeners() {
    
    const METERS_TO_UNIT = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    }

    let convertBtn = document.getElementById('convert');
    convertBtn.addEventListener('click', convertHandler);

    function convertHandler(e) {
        let inputFieldValue = document.getElementById('inputDistance').value;
        let outputFieldElement = document.getElementById('outputDistance');

        let inputUnit = document.getElementById('inputUnits').value;
        let outputUnit = document.getElementById('outputUnits').value;

        let valueInMeters = inputFieldValue * METERS_TO_UNIT[inputUnit];
        let convertedValue = valueInMeters / METERS_TO_UNIT[outputUnit];

        outputFieldElement.value = convertedValue;
    }
}