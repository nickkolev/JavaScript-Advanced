class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }

    addSmartphone(model, storage, price, condition) {
        if(model == '' || storage < 0 || price < 0 || condition == '') {
            throw new Error('Invalid smartphone!');
        }

        this.availableSmartphones.push({
            model,
            storage,
            price,
            condition
        });

        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
    }

    sellSmartphone(model, desiredStorage) {
        let smartphone = this.availableSmartphones.find(s => s.model == model);

        if(!smartphone) {
            throw new Error(`${model} was not found!`);
        }

        let currPrice = 0;
        if(smartphone.storage >= desiredStorage){
            currPrice = smartphone.price
        } else if (desiredStorage - smartphone.storage <= 128) {
            currPrice = smartphone.price * 0.9;
        } else {
            currPrice = smartphone.price * 0.8;
        }

        let index = this.availableSmartphones.indexOf(smartphone);
        this.availableSmartphones.splice(index, 1);

        this.soldSmartphones.push({
            model: smartphone.model,
            storage: smartphone.storage,
            soldPrice: currPrice
        });

        this.revenue += currPrice;
        return `${model} was sold for ${currPrice.toFixed(2)}$`;
    }

    upgradePhones() {
        if (this.availableSmartphones.length === 0) {
          return "There are no available smartphones";
        }
    
        this.availableSmartphones = this.availableSmartphones.map((phone) => {
          const doubledStorage = phone.storage * 2;
          const roundedPrice = phone.price.toFixed(2);
          return {
            ...phone,
            storage: doubledStorage,
            price: roundedPrice,
          };
        });
    
        const availablePhones = this.availableSmartphones
          .map(
            (phone) =>
              `${phone.model} / ${phone.storage} GB / ${phone.condition} condition / ${phone.price}$`
          )
          .join("\n");
    
        return `Upgraded Smartphones:\n${availablePhones}`;
      }

    salesJournal(criteria) {
        if(criteria == 'storage') {
            this.soldSmartphones.sort((a, b) => b.storage - a.storage);
        } else if (criteria == 'model') {
            this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model));
        } else {
            throw new Error('Invalid criteria!');
        }

        let result = [];
        result.push(`${this.retailer} has a total income of ${this.revenue}$`);
        result.push(`${this.soldSmartphones.length} smartphones sold:`);

        this.soldSmartphones.forEach(s => result.push(`${s.model} / ${s.storage} GB / ${s.soldPrice}$`));

        return result.join('\n');
    }
}


let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));
