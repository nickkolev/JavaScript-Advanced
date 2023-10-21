let expect = require('chai').expect;
let lottery = require('./lottery');
let assert = require('assert');


describe('lottery', () => {
    it('buyLotteryTicket', () => {
        expect( lottery.buyLotteryTicket(2, 2, true) ).to.equal('You bought 2 tickets for 4$.');
        expect(() => { lottery.buyLotteryTicket(2, 2, false) }).to.throw('Unable to buy lottery ticket!');
        expect(() => { lottery.buyLotteryTicket(5, 5, []) }).to.throw('Invalid input!');
        expect(() => { lottery.buyLotteryTicket(-5, 5, true) }).to.throw('Invalid input!');
        expect(() => { lottery.buyLotteryTicket(5, -5, true) }).to.throw('Invalid input!');  
        expect(() => { lottery.buyLotteryTicket("5", 5, true) }).to.throw('Invalid input!');  
        expect(() => { lottery.buyLotteryTicket(5, "5", true) }).to.throw('Invalid input!');  
    });

    it('checkTicket', () => {
        expect( lottery.checkTicket([11,22,3,4,5,6],[1,2,3,4,5,6]) ).to.equal('Congratulations you win, check your reward!');
        expect( lottery.checkTicket([1,2,3,4,5,6],[1,2,3,4,5,6]) ).to.equal('You win the JACKPOT!!!');
        expect( lottery.checkTicket([5,5,5,5,5,5],[1,2,3,4,5,6]) ).to.equal(undefined);
        expect( lottery.checkTicket([0,0,0,0,0,0],[1,2,3,4,5,6]) ).to.equal(undefined);
        expect(() => { lottery.checkTicket([1,2,3,4,5,6],[1,2,3,4,5]) }).to.throw('Invalid input!');
        expect(() => { lottery.checkTicket([1,2,3,4,5,],[1,2,3,4,5,6]) }).to.throw('Invalid input!');
        expect(() => { lottery.checkTicket([1,2,3,4,5,6],1,2,3,4,5,6) }).to.throw('Invalid input!');
        expect(() => { lottery.checkTicket(1,2,3,4,5,6,[1,2,3,4,5,6]) }).to.throw('Invalid input!'); 
    });

    it('secondChance', () => {
        expect( lottery.secondChance(238,[345,656,238]) ).to.equal('You win our second chance prize!');
        expect( lottery.secondChance(222,[333,555,999]) ).to.equal("Sorry, your ticket didn't win!");
        expect(() => { lottery.secondChance('55', [55,33,66]) }).to.throw('Invalid input!');
        expect(() => { lottery.secondChance(55, 55) }).to.throw('Invalid input!');
    });  
});



