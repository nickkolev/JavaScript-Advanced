const createCalculator = require('./addSubtract');
const { expect } = require('chai');

describe('add / subsract tests', () => {

    it('returns an object as a result of the function', () => {

        expect(typeof createCalculator()).to.equal('object');

    })

    it('contains the three functions add, subtract, get as properties', () => {

        const object = createCalculator();
        expect(object).haveOwnProperty('add');
        expect(object).haveOwnProperty('subtract');
        expect(object).haveOwnProperty('get');

    })

    
    it('get functionality works properly', () => {

        const object = createCalculator();
        object.add(3);
        expect(object.get()).to.equal(3);

    })
    

    it('add functionality works properly', () => {

        const object = createCalculator();
        object.add(5);
        object.add(4);
        expect(object.get()).to.equal(9);
        object.add(6);
        expect(object.get()).to.equal(15);
        
    })

    it('subtract functionality works properly', () => {

        const object = createCalculator();
        object.add(5);
        object.subtract(4);
        expect(object.get()).to.equal(1);
        object.subtract(6);
        expect(object.get()).to.equal(-5);
        
    })

    it('calculates properly if a string represantation of a number is given', () => {

        const object = createCalculator();
        object.add('1');
        expect(object.get()).to.equal(1);

    })

    it('returns NaN if not a number or not a string represantation of a number is given', () => {

        const object = createCalculator();
        object.add('blah');
        expect(Number.isNaN(object.get())).to.be.true;

    })

})