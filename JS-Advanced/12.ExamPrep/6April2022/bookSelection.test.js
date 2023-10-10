const { expect, assert } = require("chai");
const bookSelection = require("./bookSelection");

describe("Tests for 'book selection'", function () {
    describe("testing isGenreSuitable function", function () {
        it("should return 'not suitable'", function () {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
            expect(bookSelection.isGenreSuitable('Thriller', 11)).to.equal(`Books with Thriller genre are not suitable for kids at 11 age`);
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`);
            expect(bookSelection.isGenreSuitable('Thriller', 11)).to.equal(`Books with Thriller genre are not suitable for kids at 11 age`);
        });
        it("should return 'suitable'", function () {
            expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable('Thriller', 18)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable('Action', 12)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable('Comedy', 11)).to.equal(`Those books are suitable`);
        });
    });
    describe("testing isItAffordable function", function () {
        it("invalid input", function () {
            expect(() => bookSelection.isItAffordable('Thriller', 12)).to.throw(`Invalid input`);
            expect(() => bookSelection.isItAffordable(12, 'asdasd')).to.throw(`Invalid input`);
            expect(() => bookSelection.isItAffordable([], 12)).to.throw(`Invalid input`);
            expect(() => bookSelection.isItAffordable(2, [])).to.throw(`Invalid input`);
            expect(() => bookSelection.isItAffordable({}, 12)).to.throw(`Invalid input`);
            expect(() => bookSelection.isItAffordable(1, {})).to.throw(`Invalid input`);
            expect(() => bookSelection.isItAffordable(undefined, 12)).to.throw(`Invalid input`);
            expect(() => bookSelection.isItAffordable(1, null)).to.throw(`Invalid input`);
        });
        it("valid input", function () {
            expect(bookSelection.isItAffordable(5, 7)).to.equal(`Book bought. You have 2$ left`);
            expect(bookSelection.isItAffordable(0, 13)).to.equal(`Book bought. You have 13$ left`);
            expect(bookSelection.isItAffordable(13, 13)).to.equal(`Book bought. You have 0$ left`);
            expect(bookSelection.isItAffordable(0, 0)).to.equal(`Book bought. You have 0$ left`);
            expect(bookSelection.isItAffordable(-1, 1)).to.equal(`Book bought. You have 2$ left`);
            expect(bookSelection.isItAffordable(2.2, 3.2)).to.equal(`Book bought. You have 1$ left`);
            expect(bookSelection.isItAffordable(5, 2)).to.equal(`You don't have enough money`);
            expect(bookSelection.isItAffordable(0, -1)).to.equal(`You don't have enough money`);
            expect(bookSelection.isItAffordable(100.3, 13.2)).to.equal(`You don't have enough money`);
            expect(bookSelection.isItAffordable(1, 0)).to.equal(`You don't have enough money`);
        });
    });
    describe("testing suitableTitles function", function () {
        it("invalid input", function () {
            expect(() => bookSelection.suitableTitles('Thriller', 'string')).to.throw(`Invalid input`);
            expect(() => bookSelection.suitableTitles(12, 'string')).to.throw(`Invalid input`);
            expect(() => bookSelection.suitableTitles(12.2, 'string')).to.throw(`Invalid input`);
            expect(() => bookSelection.suitableTitles(NaN, 'string')).to.throw(`Invalid input`);
            expect(() => bookSelection.suitableTitles(undefined, 'string')).to.throw(`Invalid input`);
            expect(() => bookSelection.suitableTitles(null, 'string')).to.throw(`Invalid input`);
            expect(() => bookSelection.suitableTitles({}, 'string')).to.throw(`Invalid input`);
            expect(() => bookSelection.suitableTitles([], 12)).to.throw(`Invalid input`);
            expect(() => bookSelection.suitableTitles([], NaN)).to.throw(`Invalid input`);
            expect(() => bookSelection.suitableTitles([], undefined)).to.throw(`Invalid input`);
            expect(() => bookSelection.suitableTitles([], null)).to.throw(`Invalid input`);
            expect(() => bookSelection.suitableTitles([], [])).to.throw(`Invalid input`);
            expect(() => bookSelection.suitableTitles([], {})).to.throw(`Invalid input`);
        });
        it("return title for book", () => {
            assert.equal(
              bookSelection.suitableTitles(
                [{ title: "The Da Vinci Code", genre: "Thriller" }],
                "Thriller"
              ),
              "The Da Vinci Code"
            );
        });
        it('is suitable', () => {
            expect(bookSelection.suitableTitles([{
                title: 'gosho',
                genre: 'Ave, Pesho!'
            }, 
            {
                title: 'Pesho the gladiator',
                genre: 'Ave, Pesho!'
            }], 'Ave, Pesho!')).to.deep.equal(['gosho', 'Pesho the gladiator']);
        });
    });
});
