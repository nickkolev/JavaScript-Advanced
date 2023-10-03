const { expect } = require("chai");
const lookupChar = require("./charLookUp");

describe("testing the charLookUp function", () => {
    describe("when passing not a string for the first argument -> return undefined", () => {
        it("should return undefined when passed a number for first param", () => {
            expect(lookupChar(2, 3)).to.equal(undefined);
        });
        it("should return undefined when passed an array for first param", () => {
            expect(lookupChar([1, 2, 3], 3)).to.equal(undefined);
        });
        it("should return undefined when passed an undefined for first param", () => {
            expect(lookupChar(undefined, 3)).to.equal(undefined);
        });
        it("should return undefined when passed an empty string for first param", () => {
            expect(lookupChar("", 3)).to.equal(undefined);
        });
    });

    describe("when passing not a number for the second parameter -> return undefined ", () => {
        it("should return undefined when passed a string for second param", () => {
            expect(lookupChar("asd", "asd asd")).to.equal(undefined);
        });
        it("should return undefined when passed an array for second param", () => {
            expect(lookupChar("3", [1, 2, 3])).to.equal(undefined);
        });
        it("should return undefined when passed an undefined for second param", () => {
            expect(lookupChar("asd", undefined)).to.equal(undefined);
        });
        it("should return undefined when passed a decimal for second param", () => {
            expect(lookupChar("asd", 5.5)).to.equal(undefined);
        });
    });

    describe("when passing correct arguments but incorrect index -> return Incorrect index ", () => {
        it("should return 'Incorrect index' when passed an index < 0", () => {
            expect(lookupChar("asd", -2)).to.equal("Incorrect index");
        });
        it("should return 'Incorrect index' when passed an index > str.size", () => {
            expect(lookupChar("asd", 18)).to.equal("Incorrect index");
        });
    });

    describe("when passing correct arguments", () => {
        it("should return the character at the specified index", () => {
            expect(lookupChar("asd", 1)).to.equal("s");
        });
        it("should return the character at the specified index", () => {
            expect(lookupChar("asd", 2)).to.equal("d");
        });
        it("should return the character at the specified index", () => {
            expect(lookupChar("asd", 0)).to.equal("a");
        });
    });
});
