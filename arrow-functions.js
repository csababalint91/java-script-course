let hi = () => { console.log('Howdy'); }
hi();

let hi2 = (name) => { console.log(`howdy ${name}`) };
hi2('bob');


let add = (a, b) => { return a + b };
console.log(add(7, 5));

// let names = ['david', 'josh', 'eddie', 'alex'];
// names.map( (name) => { console.log(`howdy ${name}!`) } );

// let names = ['david', 'josh', 'eddie', 'alex'];
// let i = 0;
// names.map( (name) => { i++; console.log(`howdy ${name}! ${i}!`); } );

let names = ['david', 'josh', 'eddie', 'alex'];
var transformed = names.map((name) => { return `howdy ${name}!` }); 
console.log(transformed);