let expect = require('chai').expect;
let motorcycleRider = require('./Motorcycle Rider');

describe("Tests for motorcycleRaider", () => {
    it("licenseRestriction ", () => {
        expect(() => { motorcycleRider.licenseRestriction('AMM') }).to.throw("Invalid Information!");
        expect(() => { motorcycleRider.licenseRestriction('category') }).to.throw("Invalid Information!");
        expect(() => { motorcycleRider.licenseRestriction(12) }).to.throw("Invalid Information!");
        expect(() => { motorcycleRider.licenseRestriction(null) }).to.throw("Invalid Information!");
        expect(() => { motorcycleRider.licenseRestriction(undefined) }).to.throw("Invalid Information!");
        expect(() => { motorcycleRider.licenseRestriction([]) }).to.throw("Invalid Information!");
        expect(() => { motorcycleRider.licenseRestriction({}) }).to.throw("Invalid Information!");
        expect(motorcycleRider.licenseRestriction('AM')).to.equal("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.");
        expect(motorcycleRider.licenseRestriction('A1')).to.equal("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.");
        expect(motorcycleRider.licenseRestriction('A2')).to.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18.");
        expect(motorcycleRider.licenseRestriction('A')).to.equal("No motorcycle restrictions, and the minimum age is 24.");
    });

    it("motorcycleShowroom ", () => {
        expect(() => { motorcycleRider.motorcycleShowroom([], 600) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.motorcycleShowroom(['125', '250', '500'], 20) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.motorcycleShowroom(['125', '250', '500'], 0) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.motorcycleShowroom(12, 200) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.motorcycleShowroom('500', 200) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.motorcycleShowroom([], 200) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.motorcycleShowroom({}, 200) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.motorcycleShowroom(undefined, 200) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.motorcycleShowroom(null, 200) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.motorcycleShowroom(['125', '250', '500'], 'asd') }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.motorcycleShowroom(['125', '250', '500'], []) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.motorcycleShowroom(['125', '250', '500'], {}) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.motorcycleShowroom(['125', '250', '500'], null) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.motorcycleShowroom(['125', '250', '500'], true) }).to.throw('Invalid Information!');
        expect(motorcycleRider.motorcycleShowroom(['125', '250', '500'], 600)).to.equal("There are 3 available motorcycles matching your criteria!");
        expect(motorcycleRider.motorcycleShowroom(['125', '250', '600'], 600)).to.equal("There are 3 available motorcycles matching your criteria!");
        expect(motorcycleRider.motorcycleShowroom(['125', '250', '700'], 600)).to.equal("There are 2 available motorcycles matching your criteria!");
        expect(motorcycleRider.motorcycleShowroom(['125', '850', '700'], 600)).to.equal("There are 1 available motorcycles matching your criteria!");
        expect(motorcycleRider.motorcycleShowroom(['900', '850', '700'], 600)).to.equal("There are 0 available motorcycles matching your criteria!");
    });

    it("otherSpendings", () => {
        expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['oil filter', 'engine oil'], true)).to.equal("You spend $540.00 for equipment and consumables with 10% discount!");
        expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['oil filter', 'engine oil'], false)).to.equal("You spend $600.00 for equipment and consumables!");
        expect(motorcycleRider.otherSpendings([], ['oil filter', 'engine oil'], true)).to.equal("You spend $90.00 for equipment and consumables with 10% discount!");
        expect(motorcycleRider.otherSpendings([], ['oil filter', 'engine oil'], false)).to.equal("You spend $100.00 for equipment and consumables!");
        expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], [], true)).to.equal("You spend $450.00 for equipment and consumables with 10% discount!");
        expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], [], false)).to.equal("You spend $500.00 for equipment and consumables!");
        expect(() => { motorcycleRider.otherSpendings(['helmet', 'jacked'], ['oil filter', 'engine oil'], 12) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.otherSpendings(['helmet', 'jacked'], ['oil filter', 'engine oil'], 'asd') }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.otherSpendings(['helmet', 'jacked'], ['oil filter', 'engine oil'], []) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.otherSpendings(['helmet', 'jacked'], ['oil filter', 'engine oil'], {}) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.otherSpendings(['helmet', 'jacked'], ['oil filter', 'engine oil'], null) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.otherSpendings(['helmet', 'jacked'], ['oil filter', 'engine oil'], undefined) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.otherSpendings(['helmet', 'jacked'], {}, true) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.otherSpendings(['helmet', 'jacked'], 12, true) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.otherSpendings(['helmet', 'jacked'], '1asd', true) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.otherSpendings(['helmet', 'jacked'], true, true) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.otherSpendings(['helmet', 'jacked'], null, true) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.otherSpendings(['helmet', 'jacked'], undefined, true) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.otherSpendings({}, ['oil filter', 'engine oil'], true) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.otherSpendings(12, ['oil filter', 'engine oil'], true) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.otherSpendings('asd', ['oil filter', 'engine oil'], true) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.otherSpendings(true, ['oil filter', 'engine oil'], true) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.otherSpendings(null, ['oil filter', 'engine oil'], true) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.otherSpendings(undefined, ['oil filter', 'engine oil'], true) }).to.throw('Invalid Information!');
    });
});