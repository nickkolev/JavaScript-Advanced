class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw new Error("Not enough space in the garden.");
        }

        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0,
        });

        this.spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        let plant = this.plants.find((p) => (p.plantName === plantName));
        if (!plant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (plant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        }

        if (quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }

        plant.ripe = true;
        plant.quantity += quantity;

        if (Number(quantity) === 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }

    harvestPlant(plantName) {
        let plant = this.plants.find((p) => (p.plantName === plantName));

        if(!plant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (!plant.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        this.plants.splice(this.plants.indexOf(plant), 1);
        this.storage.push({
            plantName: plant.plantName,
            quantity: plant.quantity,
        });
        this.spaceAvailable += plant.spaceRequired;

        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let result = `The garden has ${ this.spaceAvailable } free space left.\n`;
        result += `Plants in the garden: `;

        let plants = []; 
        this.plants.forEach(plant => plants.push(plant.plantName));

        result += plants.join(', ');
        result += '\n';

        if(this.storage.length <= 0) {
            result += 'Plants in storage: The storage is empty.';
        } else {
            result += 'Plants in storage: ';
            
            this.storage.forEach(plant => result += `${plant.plantName} (${plant.quantity}), `);
        }
        result = result.substring(0, result.length - 2);
        return result;
    }
}

// input 1
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));

// input 2
// const myGarden = new Garden(250);
// console.log(myGarden.addPlant("apple", 20));
// console.log(myGarden.addPlant("orange", 100));
// console.log(myGarden.addPlant("cucumber", 30));
// console.log(myGarden.ripenPlant("apple", 10));
// console.log(myGarden.ripenPlant("orange", 1));
// console.log(myGarden.ripenPlant("orange", 4));

// input 3
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('olive', 30));

// input 6
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());
