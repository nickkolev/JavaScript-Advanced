const { expect } = require("chai");
const rentCar = require("./rentCar");

describe('Tests', () => {

    describe('searchCar', () => {
        it('correct input', () => {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'BMW')).to.equal(`There is 1 car of model BMW in the catalog!`);
            expect(rentCar.searchCar(["Volkswagen", "BMW", "BMW", "Audi"], 'BMW')).to.equal(`There is 2 car of model BMW in the catalog!`);
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'TEST')).to.throw(`There are no such models in the catalog!`);
        });

        it('incorrect input', () => {
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 1)).to.throw(`Invalid input!`);
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], [1])).to.throw(`Invalid input!`);
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], { '1': 1 })).to.throw(`Invalid input!`);
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], true)).to.throw(`Invalid input!`);
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], undefined)).to.throw(`Invalid input!`);
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], null)).to.throw(`Invalid input!`);

            expect(() => rentCar.searchCar('TEST', 'BMW')).to.throw(`Invalid input!`);
            expect(() => rentCar.searchCar(1, 'BMW')).to.throw(`Invalid input!`);
            expect(() => rentCar.searchCar({ '1': 1 }, 'BMW')).to.throw(`Invalid input!`);
            expect(() => rentCar.searchCar(true, 'BMW')).to.throw(`Invalid input!`);
            expect(() => rentCar.searchCar(undefined, 'BMW')).to.throw(`Invalid input!`);
            expect(() => rentCar.searchCar(null, 'BMW')).to.throw(`Invalid input!`);

        });
    });

    describe('calculatePriceOfCar', () => {
        it('correct input', () => {
            expect(rentCar.calculatePriceOfCar('Audi', 1)).to.equal(`You choose Audi and it will cost $36!`);
            expect(rentCar.calculatePriceOfCar('Audi', 2)).to.equal(`You choose Audi and it will cost $72!`);
            expect(rentCar.calculatePriceOfCar('Audi', 0)).to.equal(`You choose Audi and it will cost $0!`);
            expect(() => rentCar.calculatePriceOfCar('Lambo', 1)).to.throw(`No such model in the catalog!`);
        });

        it('incorrect input', () => {
            expect(() => rentCar.calculatePriceOfCar('test', 'test')).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('test', [1])).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('test', { '1': 1 })).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('test', true)).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('test', undefined)).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('test', null)).to.throw('Invalid input!');

            expect(() => rentCar.calculatePriceOfCar(1, 1)).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar([1], 1)).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar({ '1': 1 }, 1)).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(true, 1)).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(undefined, 1)).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(null, 1)).to.throw('Invalid input!');

        });
    });

    describe('checkBudget', () => {
        it('correct input', () => {
            expect(rentCar.checkBudget(10, 1, 11)).to.equal(`You rent a car!`);
            expect(rentCar.checkBudget(10, 1, 10)).to.equal(`You rent a car!`);
            expect(rentCar.checkBudget(100, 1, 10)).to.equal(`You need a bigger budget!`);
        });

        it('incorrect input', () => {
            expect(() => rentCar.checkBudget(1, 1, 'test')).to.throw(`Invalid input!`);
            expect(() => rentCar.checkBudget(1, 1, ['test'])).to.throw(`Invalid input!`);
            expect(() => rentCar.checkBudget(1, 1, { 'test': 1 })).to.throw(`Invalid input!`);
            expect(() => rentCar.checkBudget(1, 1, true)).to.throw(`Invalid input!`);
            expect(() => rentCar.checkBudget(1, 1, undefined)).to.throw(`Invalid input!`);
            expect(() => rentCar.checkBudget(1, 1, null)).to.throw(`Invalid input!`);

            expect(() => rentCar.checkBudget(1, 'test', 1)).to.throw(`Invalid input!`);
            expect(() => rentCar.checkBudget(1, ['test'], 1)).to.throw(`Invalid input!`);
            expect(() => rentCar.checkBudget(1, { 'test': 1 }, 1)).to.throw(`Invalid input!`);
            expect(() => rentCar.checkBudget(1, true, 1)).to.throw(`Invalid input!`);
            expect(() => rentCar.checkBudget(1, undefined, 1)).to.throw(`Invalid input!`);
            expect(() => rentCar.checkBudget(1, null, 1)).to.throw(`Invalid input!`);

            expect(() => rentCar.checkBudget('test', 1, 1)).to.throw(`Invalid input!`);
            expect(() => rentCar.checkBudget(['test'], 1, 1)).to.throw(`Invalid input!`);
            expect(() => rentCar.checkBudget({ 'test': 1 }, 1, 1)).to.throw(`Invalid input!`);
            expect(() => rentCar.checkBudget(true, 1, 1)).to.throw(`Invalid input!`);
            expect(() => rentCar.checkBudget(undefined, 1, 1)).to.throw(`Invalid input!`);
            expect(() => rentCar.checkBudget(null, 1, 1)).to.throw(`Invalid input!`);


        });
    });

});