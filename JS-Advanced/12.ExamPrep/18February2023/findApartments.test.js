const { expect } = require("chai");
const findNewApartment = require("./findApartment");

describe("find apartments", () => {
    it("isGoodLocation ", () => {
        expect(findNewApartment.isGoodLocation('Balchik', true)).to.equal("This location is not suitable for you.");
        expect(findNewApartment.isGoodLocation('Varna', false)).to.equal("There is no public transport in area.");
        expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal("You can go on home tour!");
        expect(findNewApartment.isGoodLocation('Varna', true)).to.equal("You can go on home tour!");
        expect(() => findNewApartment.isGoodLocation(1, 1)).to.throw("Invalid input!");
        expect(() => findNewApartment.isGoodLocation(1, [])).to.throw("Invalid input!");
        expect(() => findNewApartment.isGoodLocation({}, 1)).to.throw("Invalid input!");
        expect(() => findNewApartment.isGoodLocation(undefined, 1)).to.throw("Invalid input!");
        expect(() => findNewApartment.isGoodLocation('Varna', null)).to.throw("Invalid input!");
    });
    it("isLargeEnough", () => {
        expect(findNewApartment.isLargeEnough([40, 50, 60], 60)).to.equal("60");
        expect(findNewApartment.isLargeEnough([0, 20, 40], 60)).to.equal("");
        expect(findNewApartment.isLargeEnough([140, 70, 60], 20)).to.equal("140, 70, 60");
        expect(findNewApartment.isLargeEnough([101, 99, 100], 100)).to.equal("101, 100");
        expect(findNewApartment.isLargeEnough([40, 60, 50], 0)).to.equal("40, 60, 50");
        expect(() => findNewApartment.isLargeEnough(1, 1)).to.throw("Invalid input!");
        expect(() => findNewApartment.isLargeEnough([], 1)).to.throw("Invalid input!");
        expect(() => findNewApartment.isLargeEnough('asd', 1)).to.throw("Invalid input!");
        expect(() => findNewApartment.isLargeEnough([1, 2], '')).to.throw("Invalid input!");
        expect(() => findNewApartment.isLargeEnough(1, [])).to.throw("Invalid input!");
        expect(() => findNewApartment.isLargeEnough(1, {})).to.throw("Invalid input!");
        expect(() => findNewApartment.isLargeEnough(1, undefined)).to.throw("Invalid input!");
        expect(() => findNewApartment.isLargeEnough(1, null)).to.throw("Invalid input!");
    });
    it("isItAffordable", () => {
        expect(findNewApartment.isItAffordable(100, 99)).to.equal("You don't have enough money for this house!");
        expect(findNewApartment.isItAffordable(100, 1)).to.equal("You don't have enough money for this house!");
        expect(findNewApartment.isItAffordable(100, 100)).to.equal("You can afford this home!");
        expect(findNewApartment.isItAffordable(100, 101)).to.equal("You can afford this home!");
        expect(findNewApartment.isItAffordable(100, 250)).to.equal("You can afford this home!");
        expect(() => findNewApartment.isItAffordable(0, 1)).to.throw("Invalid input!");
        expect(() => findNewApartment.isItAffordable(1, 0)).to.throw("Invalid input!");
        expect(() => findNewApartment.isItAffordable(1, -1)).to.throw("Invalid input!");
        expect(() => findNewApartment.isItAffordable(-2, 1)).to.throw("Invalid input!");
        expect(() => findNewApartment.isItAffordable('asd', 1)).to.throw("Invalid input!");
        expect(() => findNewApartment.isItAffordable(1, [])).to.throw("Invalid input!");
        expect(() => findNewApartment.isItAffordable({}, 1)).to.throw("Invalid input!");
        expect(() => findNewApartment.isItAffordable(1, undefined)).to.throw("Invalid input!");
        expect(() => findNewApartment.isItAffordable(null, 1)).to.throw("Invalid input!");
    });
});
