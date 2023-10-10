const { expect, assert } = require("chai");
const carService = require("./carService");

describe("Tests for carService", function() {
    describe("testing the isItExpensive function", function() {
        it("should return severe damage", function() {
            expect(carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`);
            expect(carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`);
        });
        it("should return cheaper", function() {
            expect(carService.isItExpensive('Wheels')).to.equal(`The overall price will be a bit cheaper`);
            expect(carService.isItExpensive('something else')).to.equal(`The overall price will be a bit cheaper`);
            expect(carService.isItExpensive('oil change')).to.equal(`The overall price will be a bit cheaper`);
        });
     });

     describe("testing the discount function", function() {
        it("should return 15% discounted price", function() {
            expect(carService.discount(3, 100)).to.equal(`Discount applied! You saved 15$`);
            expect(carService.discount(5, 100)).to.equal(`Discount applied! You saved 15$`);
            expect(carService.discount(7, 100)).to.equal(`Discount applied! You saved 15$`);
        });
        it("should return 30% discounted price", function() {
            expect(carService.discount(8, 100)).to.equal(`Discount applied! You saved 30$`);
            expect(carService.discount(80, 100.10)).to.equal(`Discount applied! You saved 30.029999999999998$`);
        });
        it("should return cannot apply discount", function() {
            expect(carService.discount(2, 100)).to.equal("You cannot apply a discount");
            expect(carService.discount(1, 100.2)).to.equal("You cannot apply a discount");
        });
        it("should throw an error for invalid input", function() {
            expect(() => carService.discount('1', 100)).to.throw(`Invalid input`);
            expect(() => carService.discount([], 100)).to.throw(`Invalid input`);
            expect(() => carService.discount({}, 100)).to.throw(`Invalid input`);
            expect(() => carService.discount(undefined, 100)).to.throw(`Invalid input`);
            expect(() => carService.discount(3, '100')).to.throw(`Invalid input`);
            expect(() => carService.discount(3, [])).to.throw(`Invalid input`);
            expect(() => carService.discount(3, {})).to.throw(`Invalid input`);
            expect(() => carService.discount(3, undefined)).to.throw(`Invalid input`);
        });
     });

     describe("testing the partsToBuy function", function() {
        it("should return with valid input", function() {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 230 }], ["blowoff valve"])).to.equal(230);
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 230 }], ["blowoff valve", "injectors"])).to.equal(230);
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 230 }, { part: "injectors", price: 70 }], ["blowoff valve", "injectors"])).to.equal(300);
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 230 }, { part: "injectors", price: 70 }, { part: "something else", price: 70 }], ["blowoff valve", "injectors"])).to.equal(300);
        });
        it("should return 0", function() {
            expect(carService.partsToBuy([{}], ["blowoff valve"])).to.equal(0);
        });
        it("should throw an error for invalid input", function() {
            expect(() => carService.discount('1', [])).to.throw(`Invalid input`);
            expect(() => carService.discount([], 100)).to.throw(`Invalid input`);
            expect(() => carService.discount({}, 100)).to.throw(`Invalid input`);
            expect(() => carService.discount(undefined, 100)).to.throw(`Invalid input`);
            expect(() => carService.discount(3, '100')).to.throw(`Invalid input`);
            expect(() => carService.discount(3, [])).to.throw(`Invalid input`);
            expect(() => carService.discount(3, {})).to.throw(`Invalid input`);
            expect(() => carService.discount(3, undefined)).to.throw(`Invalid input`);
        });
     });
});
