const add = function (a, b) {
    console.log(arguments);
    return a + b;
};
console.log(add(20,30, 100));

const user = {
    name:'Kevin',
    cities:['Philly', 'New York', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log (user.printPlacesLived());

const multiplier = {
    numbers: [12, 10, 3, 4],
    multipleBy: 3,
    multiply() {
        return this.numbers.map((num) => num * this.multipleBy);
    }
};
console.log (multiplier.multiply());