const { expect } = require("chai");
const isOddOrEven = require("./isOddOrEven");

describe("testing is Odd or Even function", () => {
    describe("when passing not a string -> return undefined", () => {
        it("should return undefined when passed a number", () => {
            //Arrange
            let num = 2;
            //Act
            let result = isOddOrEven(num);
            //Assert
            expect(result).to.equal(undefined);
        });

        it("should return undefined when passed an array", () => {
            //Arrange
            let arr = [2, "asd", 3];
            //Act
            let result = isOddOrEven(arr);
            //Assert
            expect(result).to.equal(undefined);
        });

        it("should return undefined when passed an object", () => {
            //Arrange
            let obj = {};
            //Act
            let result = isOddOrEven(obj);
            //Assert
            expect(result).to.equal(undefined);
        });

        it("should return undefined when passed undefined", () => {
            //Arrange
            let undef = undefined;
            //Act
            let result = isOddOrEven(undef);
            //Assert
            expect(result).to.equal(undefined);
        });
    });

    describe('when passing an even string -> return "even" ', () => {
        it("should return 'even' when passed an even string", () => {
            //Arrange
            let str = 'even';
            //Act
            let result = isOddOrEven(str);
            //Assert
            expect(result).to.equal('even');
        });

        it("should return 'even' when passed more than one even strings", () => {
            //Arrange
            let str = 'even';
            let str2 = 'also';
            //Act
            let result = isOddOrEven(str);
            //Assert
            expect(result).to.equal('even');
            expect(isOddOrEven(str2)).to.equal('even');
        });
    });
    
    describe('when passing an odd string -> return "odd" ', () => {
        it("should return 'odd' when passed an odd string", () => {
            //Arrange
            let str = 'odd';
            //Act
            let result = isOddOrEven(str);
            //Assert
            expect(result).to.equal('odd');
        });

        it("should return 'even' when passed more than one odd strings", () => {
            //Arrange
            let str = 'odd';
            let str2 = 'asd';
            //Act
            let result = isOddOrEven(str);
            //Assert
            expect(result).to.equal('odd');
            expect(isOddOrEven(str2)).to.equal('odd');
        });
    });
});
