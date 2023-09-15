function solve(arr) {
    console.log(sum(arr));
    console.log(inverseSum(arr));
    console.log(concat(arr));

    function sum(elements) {
        let sum = 0;
        for (let i = 0; i < elements.length; i++) {
            sum += elements[i];
        }

        return sum;
    }

    function inverseSum(elements) {
        let inverseSum = 0;
        for (let i = 0; i < elements.length; i++) {
            inverseSum += 1 / elements[i];
        }

        return inverseSum;
    }

    function concat(elements) {
        let string = '';
        for (let i = 0; i < elements.length; i++) {
            string += elements[i];
        }

        return string;
    }
}

solve([1, 2, 3]);
solve([2, 4, 8, 16]);