class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    // helper functionality
    updateSize() {
        this.size = this.list.length;
    }

    orderList() {
        this.list.sort((a, b) => a - b);
    }

    // main functionalities
    add(element) {
        this.list.push(element);
        this.updateSize();
        this.orderList();
    }

    remove(index) {
        if (this.list[index] === undefined) {
            return;
        }

        this.list.splice(index, 1);
        this.updateSize();
        this.orderList();
    }

    get(index) {
        if (this.list[index] === undefined) {
            return;
        }
        return this.list[index];
    }
}

const list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));