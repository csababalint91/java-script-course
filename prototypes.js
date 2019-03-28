let originalCar = {
    make: 'bmw',
    model: '745li',
    year: '2010'
};

let newCar = Object.create(originalCar);

console.log(newCar.make);
newCar.make = 'audi';
console.log(newCar.make);
console.log(newCar.whatever); //undefined 

console.log(Object.getPrototypeOf(newCar));

let myPrototype = Object.create(newCar);
console.log(myPrototype.make);

originalCar.doors = 4;
console.log(newCar.doors);

console.log(originalCar.hasOwnProperty('doors'));
console.log(newCar.hasOwnProperty('doors'));

