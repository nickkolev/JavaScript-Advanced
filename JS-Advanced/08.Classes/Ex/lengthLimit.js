class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength = Math.max(this.innerLength - length, 0);
    }

    toString() {
        const LESS_THAN_INITIAL_VALUE = "...";

        if (this.innerLength === 0) {
            return LESS_THAN_INITIAL_VALUE;
        }

        if (this.innerString.length > this.innerLength) {
            return `${this.innerString.slice(
                0,
                this.innerLength
            )}${LESS_THAN_INITIAL_VALUE}`;
        }

        return this.innerString;
    }
}

const test = new Stringer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4);
console.log(test.toString()); // Test