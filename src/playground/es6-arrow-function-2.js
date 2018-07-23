const add = function (a, b) {
    return a + b;
}

console.log(add(55, 1));

const user = {
    name: 'Andrew',
    cities: ['philadelphia', 'new york', 'dublin'],
    printPlacesLived: function() {
        console.log(this.name);
        console.log(this.cities);

        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3, 4, 5, 6],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());