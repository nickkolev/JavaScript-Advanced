function createSortedList() {

    let list = {
        numbers: [],
        size: 0,

        add(element) {
            this.numbers.push(element);
            this.size++;
            return this.numbers.sort((a, b) => a - b);
        },

        remove(index) {
            if(index >= 0 && index < this.size) {
                this.numbers.splice(index, 1)
                this.size--;
            }
            return this.numbers.sort((a, b) => a - b);
        },

        get(index) {
            if(index >= 0 && index < this.size) {
                return this.numbers[index];
            }
        }
    }

    return list;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7); 
console.log(list.get(1)); 
list.remove(1); 
console.log(list.get(1));