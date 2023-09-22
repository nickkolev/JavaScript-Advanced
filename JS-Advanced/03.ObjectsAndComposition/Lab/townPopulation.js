function solve(input) {

    const registry = {};

    for (const string of input) {

        let [city, populationAsString] = string.split(' <-> ');
        let population = Number(populationAsString);

        if(!registry.hasOwnProperty(city)) {
            registry[city] = 0;
        }
        registry[city] += population;
    }
    
    for (const town in registry) {
        console.log(`${town} : ${registry[town]}`)
    }
}

solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);

solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);