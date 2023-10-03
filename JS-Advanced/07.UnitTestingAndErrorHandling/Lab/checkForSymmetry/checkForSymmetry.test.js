const { expect } = require('chai');
const isSymmetric = require('./checkForSymmetry');

describe('testing isSymmetric function', () => {
    it('should return true on symmetric array', () => {
        //Arrange
        let arr = [0, 1, 1, 0];
        //Act
        let result = isSymmetric(arr);
        //Assert
        expect(result).to.equal(true);
    });

    it('should return false on non symmetric array', () => {
        //Arrange
        let arr = [1, 1, 0, 0];
        //Act
        let result = isSymmetric(arr);
        //Assert
        expect(result).to.equal(false);
    });

    it('should return false if a non array is send to the function', () => {
        //Arrange
        let arr = 'this is not an array';
        //Act
        let result = isSymmetric(arr);
        //Assert
        expect(result).to.equal(false);
        expect(isSymmetric(3)).to.be.false;
        expect(isSymmetric('a')).to.be.false;
    });

    it('should return true if an empty array', () => {
        //Arrange
        let arr = [];
        //Act
        let result = isSymmetric(arr);
        //Assert
        expect(result).to.equal(true);
    });

    it('returns true if array is symmetric with strings', () => {

        expect(isSymmetric(['a','b','b','a'])).to.be.true;
        expect(isSymmetric(['a','b','c','b','a'])).to.be.true;

    });

    it('returns false if array is not symmetric', () => {

        expect(isSymmetric(1,2,1,2)).to.be.false;
        expect(isSymmetric(['1', '2', '1', '2'])).to.be.false;

    });

    it('returns false if array is symmetric but with mixed data types', () => {

        expect(isSymmetric([1,2,2,'1'])).to.be.false;

    });
});