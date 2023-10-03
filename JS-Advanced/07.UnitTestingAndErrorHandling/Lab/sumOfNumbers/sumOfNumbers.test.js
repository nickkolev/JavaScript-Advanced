const { expect } = require("chai");
const sum = require("./sumOfNumbers");

describe("Sum of numbers function tests", () => {
    it("should sum integers correctly", () => {
        //Arrange
        let arr = [1, 2, 3, 4, 5];
        //Act
        let result = sum(arr);
        //Assert
        expect(result).to.equal(15);
    });

    it("should sum decimal numbers correctly", () => {
        //Arrange
        let arr = [1.1, 2.2, 3.3];
        //Act
        let result = sum(arr);
        //Assert
        expect(result).to.equal(6.6);
    });

    it("should cast string to Number(), before sum", function () {
        // Arrange:
        let arr = ["10", "20"];
        // Act:
        let result = sum(arr);
        // Assert:
        expect(result).to.be.equal(30);
    });

    it("return NaN if one element of array is not a number", function () {
        // Arrange:
        let arr = ["str", "20"];
        // Act:
        let result = sum(arr);
        // Assert:
        expect(result).to.be.NaN;
    });

    it('should return 0 if an empty arr is sent', () => {
        //Arrange
        let arr = [];
        //Act
        let result = sum(arr);
        //Assert
        expect(result).to.equal(0);
    })
});
