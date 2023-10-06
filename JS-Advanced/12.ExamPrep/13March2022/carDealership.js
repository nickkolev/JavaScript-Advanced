class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if(model === '' || (typeof horsepower !== 'number' || horsepower < 0) || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }

        let car = {
            model,
            horsepower,
            price: price.toFixed(2),
            mileage: mileage.toFixed(2)
        };
        this.availableCars.push(car);

        return `New car added: ${model} - ${horsepower} HP - ${Number(mileage).toFixed(2)} km - ${Number(price).toFixed(2)}$`;
    };

    sellCar(model, desiredMileage) {
        if(!this.availableCars.find(c => c.model === model)) {
            throw new Error(`${model} was not found!`);
        }

        let carFound = this.availableCars.find(c => c.model === model);

        let finalPrice;
        if(carFound.mileage <= desiredMileage) {
            finalPrice = carFound.price;
        } else if ((carFound.mileage - desiredMileage) <= 40000) {
            finalPrice = carFound.price * 0.95;
        } else {
            finalPrice = carFound.price * 0.9;
        }
        finalPrice = Math.round(finalPrice, 2);

        this.soldCars.push({
            model: carFound.model,
            horsepower: carFound.horsepower,
            soldPrice: finalPrice,
        });

        const index = this.availableCars.indexOf(carFound);
        this.availableCars.splice(index, 1);

        this.totalIncome += finalPrice;

        return `${model} was sold for ${Number(finalPrice).toFixed(2)}$`;
    }

    currentCar() {
        if(this.availableCars.length === 0) {
            return "There are no available cars";
        }

        let result = [];
        result.push("-Available cars:");
        this.availableCars.forEach(car => {
            result.push(`---${car.model} - ${car.horsepower} HP - ${Number(car.mileage).toFixed(2)} km - ${Number(car.price).toFixed(2)}$`);
        })
        return result.join('\n');
    }

    salesReport(criteria) {
        if(criteria === 'horsepower') {
            this.soldCars = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        } else if (criteria === 'model') {
            this.soldCars = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        } else {
            throw new Error('Invalid criteria!');
        }

        let result = [];
        result.push(`-${this.name} has a total income of ${Number(this.totalIncome).toFixed(2)}$`);
        result.push(`-${this.soldCars.length} cars sold:`);
        this.soldCars.forEach(c => {
            result.push(`---${c.model} - ${c.horsepower} HP - ${Number(c.soldPrice).toFixed(2)}$`);
        });
        return result.join('\n');
    }
}

// test input 1
// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));

// test input 2
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));

// test input 3
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
console.log(dealership.currentCar());

// test input 4
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// dealership.sellCar('Toyota Corolla', 230000);
// dealership.sellCar('Mercedes C63', 110000);
// console.log(dealership.salesReport('horsepower'));
