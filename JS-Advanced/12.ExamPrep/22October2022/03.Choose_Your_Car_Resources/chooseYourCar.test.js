let expect = require('chai').expect;
let chooseYourCar = require('./chooseYourCar');

describe("Tests for chooseYourCar", () => {
    it("choosingType", () => {
        expect(() => { chooseYourCar.choosingType('Sedan', 'blue', 1899) }).to.throw('Invalid Year!');
        expect(() => { chooseYourCar.choosingType('Sedan', 'blue', 2025) }).to.throw('Invalid Year!');
        expect(() => { chooseYourCar.choosingType('JIP', 'blue', 2021) }).to.throw('This type of car is not what you are looking for.');
        expect(chooseYourCar.choosingType('Sedan', 'red', 2005)).to.equal('This Sedan is too old for you, especially with that red color.');
        expect(chooseYourCar.choosingType('Sedan', 'green', 1999)).to.equal('This Sedan is too old for you, especially with that green color.');
        expect(chooseYourCar.choosingType('Sedan', 'red', 2010)).to.equal('This red Sedan meets the requirements, that you have.');
        expect(chooseYourCar.choosingType('Sedan', 'black', 2018)).to.equal('This black Sedan meets the requirements, that you have.');
    });

    it("brandName", () => {
        expect(() => { chooseYourCar.brandName('Mazda', 1) }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.brandName(['Mazda'], 'a') }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.brandName(['Mazda'], 3.1) }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.brandName(['Mazda'], 1) }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.brandName(['Mazda'], -1) }).to.throw('Invalid Information!');
        expect(chooseYourCar.brandName(['Mazda', 'BMW', 'Mercedes'], 1)).to.equal('Mazda, Mercedes');
        expect(chooseYourCar.brandName(['Mazda', 'BMW', 'Mercedes'], 0)).to.equal('BMW, Mercedes');
    });

    it("brandName", () => {
        expect(chooseYourCar.carFuelConsumption(50, 3)).to.equal('The car is efficient enough, it burns 6.00 liters/100 km.');
        expect(chooseYourCar.carFuelConsumption(100, 15)).to.equal('The car burns too much fuel - 15.00 liters!');
        expect(chooseYourCar.carFuelConsumption(50, 2)).to.equal('The car is efficient enough, it burns 4.00 liters/100 km.');
        expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
        expect(chooseYourCar.carFuelConsumption(100, 26)).to.equal('The car burns too much fuel - 26.00 liters!');
        expect(() => { chooseYourCar.carFuelConsumption(-100, 6)  }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.carFuelConsumption(100, -6)  }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.carFuelConsumption('asd', -6)  }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.carFuelConsumption('asd', '5')  }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.carFuelConsumption(100, '5')  }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.carFuelConsumption(2, 0)  }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.carFuelConsumption(0, 5)  }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.carFuelConsumption(undefined, -6)  }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.carFuelConsumption(null, -6)  }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.carFuelConsumption(123, {})  }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.carFuelConsumption(123, [])  }).to.throw('Invalid Information!');
    });
});
