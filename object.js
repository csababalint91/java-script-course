let car = {
    make: 'bmw',
    model: '745li',
    year: '2010',
    getPrice: function() {
            //perform some calc
            return 5000;
    },
    printDescription: function() {
        console.log(this.make + ' ' + this.model);
    }

}


car.printDescription();
console.log(car.year);


console.log(car['year']);
// NEVER DO THIS,CREATS A NEW INDEX // console.log(car[1]);
 /*
var anotherCar = {};
anotherCar.whatever = 'bob';
console.log(anotherCar.whatever);
*/

/*
var a = {
    myProperty: { b: 'hi'}
};
*/

console.log(a.myProperty.b);


//OBJECT GRAPH
var c = {
    myProperty: [
        { d: 'this' },
        { e: 'can' },
        { f: 'get' },
        { g: 'crazy' }
    ],

    myProperty2: [
        { h: 'love' },
        { i: 'is'},
        { j: 'real'}
    ]
};

let carlot = [
    { year: 2017, make: 'Toyota', model: '4Runner'}, 
    { year: 2015, make: 'BMW', model: '528i'}, 
    { year: 1982, make: 'Buick', model: 'Skylark'} 
];
