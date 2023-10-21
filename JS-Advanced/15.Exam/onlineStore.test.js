let expect = require('chai').expect;
let onlineStore = require('./onlineStore');


describe('onlineStore', () => {
    it('isProductAvailable', () => {
        expect(onlineStore.isProductAvailable('Milk', 0)).to.equal(`Sorry, Milk is currently out of stock.`);
        expect(onlineStore.isProductAvailable('Kit-Kat', -1)).to.equal(`Sorry, Kit-Kat is currently out of stock.`);
        expect(onlineStore.isProductAvailable('sugar', -10)).to.equal(`Sorry, sugar is currently out of stock.`);
        expect(onlineStore.isProductAvailable('sugar', 1)).to.equal(`Great! sugar is available for purchase.`);
        expect(onlineStore.isProductAvailable('sugar', 2)).to.equal(`Great! sugar is available for purchase.`);
        expect(onlineStore.isProductAvailable('sugar', 20)).to.equal(`Great! sugar is available for purchase.`);
        expect(() => { onlineStore.isProductAvailable('Milk', '')}).to.throw("Invalid input.");
        expect(() => { onlineStore.isProductAvailable('Milk', [])}).to.throw("Invalid input.");
        expect(() => { onlineStore.isProductAvailable('Milk', {})}).to.throw("Invalid input.");
        expect(() => { onlineStore.isProductAvailable('Milk', undefined)}).to.throw("Invalid input.");
        expect(() => { onlineStore.isProductAvailable('Milk', null)}).to.throw("Invalid input.");
        expect(() => { onlineStore.isProductAvailable('Milk', true)}).to.throw("Invalid input.");
        expect(() => { onlineStore.isProductAvailable(2, 2)}).to.throw("Invalid input.");
        expect(() => { onlineStore.isProductAvailable([], 2)}).to.throw("Invalid input.");
        expect(() => { onlineStore.isProductAvailable({}, 2)}).to.throw("Invalid input.");
        expect(() => { onlineStore.isProductAvailable(undefined, 2)}).to.throw("Invalid input.");
        expect(() => { onlineStore.isProductAvailable(null, 2)}).to.throw("Invalid input.");
        expect(() => { onlineStore.isProductAvailable(false, 2)}).to.throw("Invalid input.");
    });

    it('canAffordProduct', () => {
        expect(onlineStore.canAffordProduct(20, 10)).to.equal("You don't have sufficient funds to buy this product."); 
        expect(onlineStore.canAffordProduct(20.02, 20.01)).to.equal("You don't have sufficient funds to buy this product."); 
        expect(onlineStore.canAffordProduct(11, 10)).to.equal("You don't have sufficient funds to buy this product."); 
        expect(onlineStore.canAffordProduct(10, 20)).to.equal(`Product purchased. Your remaining balance is $10.`); 
        expect(onlineStore.canAffordProduct(10, 10.50)).to.equal(`Product purchased. Your remaining balance is $0.5.`); 
        expect(onlineStore.canAffordProduct(10, 10)).to.equal(`Product purchased. Your remaining balance is $0.`); 
        expect(() => { onlineStore.isProductAvailable(10, 'a')}).to.throw("Invalid input.");
        expect(() => { onlineStore.isProductAvailable(10, [])}).to.throw("Invalid input.");
        expect(() => { onlineStore.isProductAvailable(10, {})}).to.throw("Invalid input.");
        expect(() => { onlineStore.isProductAvailable(10, false)}).to.throw("Invalid input.");
        expect(() => { onlineStore.isProductAvailable(10, undefined)}).to.throw("Invalid input.");
        expect(() => { onlineStore.isProductAvailable(10, null)}).to.throw("Invalid input.");
        expect(() => { onlineStore.isProductAvailable([], 10)}).to.throw("Invalid input.");
        expect(() => { onlineStore.isProductAvailable({}, 10)}).to.throw("Invalid input.");
        expect(() => { onlineStore.isProductAvailable(null, 10)}).to.throw("Invalid input.");
        expect(() => { onlineStore.isProductAvailable(undefined, 10)}).to.throw("Invalid input.");
    });

    it('getRecommendedProducts', () => {
        expect(onlineStore.getRecommendedProducts([{name: 'Milk', category: 'Food'}, {name: 'Bake rolls', category: 'Snacks'}], 'Snacks')).to.equal(`Recommended products in the Snacks category: Bake rolls`);        
        expect(onlineStore.getRecommendedProducts([{name: 'Candy', category: 'Snacks'}, {name: 'Bake rolls', category: 'Snacks'}], 'Snacks')).to.equal(`Recommended products in the Snacks category: Candy, Bake rolls`);        
        expect(onlineStore.getRecommendedProducts([{name: 'Candy', category: 'Snacks'}, {name: 'Bake rolls', category: 'Snacks'}], 'Pizza')).to.equal(`Sorry, we currently have no recommended products in the Pizza category.`);        
        expect(onlineStore.getRecommendedProducts([{name: 'Candy', category: 'Pizzaaza'}, {name: 'Bake rolls', category: 'Snacks'}], 'Pizza')).to.equal(`Sorry, we currently have no recommended products in the Pizza category.`);        
        expect(onlineStore.getRecommendedProducts([{name: 'Candy', category: 'Candy'}], 'Snacks')).to.equal(`Sorry, we currently have no recommended products in the Snacks category.`);
        expect(onlineStore.getRecommendedProducts([{name: 'Milk', category: 'Food'}], 'Food')).to.equal(`Recommended products in the Food category: Milk`);
        expect(() => { onlineStore.getRecommendedProducts([{name: 'Milk', category: 'Food'}], 1)}).to.throw('Invalid input.');
        expect(() => { onlineStore.getRecommendedProducts([{name: 'Milk', category: 'Food'}], [])}).to.throw('Invalid input.');
        expect(() => { onlineStore.getRecommendedProducts([{name: 'Milk', category: 'Food'}], {})}).to.throw('Invalid input.');
        expect(() => { onlineStore.getRecommendedProducts([{name: 'Milk', category: 'Food'}], undefined)}).to.throw('Invalid input.');
        expect(() => { onlineStore.getRecommendedProducts([{name: 'Milk', category: 'Food'}], null)}).to.throw('Invalid input.');
        expect(() => { onlineStore.getRecommendedProducts([{name: 'Milk', category: 'Food'}], false)}).to.throw('Invalid input.');
        expect(() => { onlineStore.getRecommendedProducts({}, 'Food')}).to.throw('Invalid input.');
        expect(() => { onlineStore.getRecommendedProducts(1, 'Food')}).to.throw('Invalid input.');
        expect(() => { onlineStore.getRecommendedProducts("asd", 'Food')}).to.throw('Invalid input.');
        expect(() => { onlineStore.getRecommendedProducts(null, 'Food')}).to.throw('Invalid input.');
        expect(() => { onlineStore.getRecommendedProducts(undefined, 'Food')}).to.throw('Invalid input.');
        expect(() => { onlineStore.getRecommendedProducts(true, 'Food')}).to.throw('Invalid input.');
    });
});