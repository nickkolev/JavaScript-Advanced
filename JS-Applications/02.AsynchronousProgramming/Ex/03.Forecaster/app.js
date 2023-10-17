function attachEvents() {
    
    // attach event listener to the submit button
    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', handleSubmit);
    
    // capture elements
    const forecastSection = document.getElementById('forecast');
    const currentForecastField = document.getElementById('current');
    const upcomingForecastField = document.getElementById('upcoming');
    const locationElement = document.getElementById('location');

    // define the valid symbols
    const symbols = {
        "Sunny":"&#x2600",
        "Partly sunny":"&#x26C5",
        "Overcast":"&#x2601",
        "Rain":"&#x2614",
        "Degrees":"&#176"
    };
    
    // defining the main url
    const mainUrl = 'http://localhost:3030/jsonstore/forecaster/';

    async function handleSubmit() {
        try{
            let res = await fetch(mainUrl + 'locations');
            let data = await res.json();

            let currLocation = data.find(x => x.name === locationElement.value);
            if(currLocation === undefined) {
                forecastSection.textContent = 'Error';
            }

            let code = currLocation.code;

            let currForecastRes = await fetch(mainUrl + `today/${code}`);
            let currForecastData = await currForecastRes.json();
            let currForecast = currForecastData['forecast'];

            let upcomingForecastRes = await fetch(mainUrl + `upcoming/${code}`);
            let upcomingForecastData = await upcomingForecastRes.json();
            let upcomingForecast = upcomingForecastData.forecast;

            document.getElementById("forecast").style.display = 'block';

            currentForecastField.appendChild(createCurrentForecast(currForecastData, currForecast));

            let forecastDiv = document.createElement('div');
            forecastDiv.classList.add('forecast-info');

            forecastDiv.appendChild(createUpcomingForecast(upcomingForecast[0]));
            forecastDiv.appendChild(createUpcomingForecast(upcomingForecast[1]));
            forecastDiv.appendChild(createUpcomingForecast(upcomingForecast[2]));

            upcomingForecastField.appendChild(forecastDiv);
        }
        catch{
            document.getElementById('forecast').style.display = 'clock';
            forecastSection.textContent = 'Error';
        }
    }

    function createUpcomingForecast(upcomingForecast) {
        let forecastSpan = document.createElement('span');
        forecastSpan.classList.add('upcoming');

        let conditionalSymbolSpan = document.createElement('span');
        conditionalSymbolSpan.classList.add("symbol");
        conditionalSymbolSpan.innerHTML = symbols[upcomingForecast["condition"]];

        let degreesSpan = document.createElement('span');
        degreesSpan.classList.add("forecast-data");
        degreesSpan.innerHTML = `${upcomingForecast["low"]}${symbols["Degrees"]}/${upcomingForecast["high"]}${symbols["Degrees"]}`;

        let conditionSpan = document.createElement('span');
        conditionSpan.classList.add("forecast-data");
        conditionSpan.innerText = upcomingForecast["condition"];

        forecastSpan.appendChild(conditionalSymbolSpan);
        forecastSpan.appendChild(degreesSpan);
        forecastSpan.appendChild(conditionSpan);

        return forecastSpan;
    }

    function createCurrentForecast(currForecastData, currForecast){
        let forecastDiv = document.createElement('div');
        forecastDiv.classList.add("forecasts");

        let conditionalSymbolSpan = document.createElement('span');
        conditionalSymbolSpan.classList.add("condition", "symbol");
        conditionalSymbolSpan.innerHTML = symbols[currForecast["condition"]];

        let forecastSpan = document.createElement('span');
        forecastSpan.classList.add("condition");

        let nameSpan = document.createElement("span");
        nameSpan.classList.add("forecast-data");
        nameSpan.innerText = currForecastData["name"];

        let degreesSpan = document.createElement('span');
        degreesSpan.classList.add("forecast-data");
        degreesSpan.innerHTML = `${currForecast["low"]}${symbols["Degrees"]}/${currForecast["high"]}${symbols["Degrees"]}`;

        let conditionSpan = document.createElement('span');
        conditionSpan.classList.add("forecast-data");
        conditionSpan.innerText = currForecast["condition"];

        forecastSpan.appendChild(nameSpan);
        forecastSpan.appendChild(degreesSpan);
        forecastSpan.appendChild(conditionSpan);

        forecastDiv.appendChild(conditionalSymbolSpan);
        forecastDiv.appendChild(forecastSpan);

        return forecastDiv;
    }
}

attachEvents();