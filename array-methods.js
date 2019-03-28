let names = [ 'david', 'eddie', 'alex', 'michael' ];
let others = [ 'sammy', 'gary', 'wolfgang', 'mark' ];

let lost = [ 4 ,8 ,15, 16, 23, 42 ];
let fibonacci = [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ];


var combined = lost.concat(fibonacci);
console.log(combined);

console.log(fibonacci.join('~'));

// push, pop

// console.log(fibonacci.push(77));
// console.log(fibonacci);

console.log(lost.shift());
console.log(lost);

console.log(lost.unshift(1, 2, 3, 4));
console.log(lost);

console.log(names);
console.log(names.reverse());
console.log(names.sort());

console.log(others.indexOf('mark'));
console.log(combined);
console.log(combined.lastIndexOf(1));

// MAP

console.log(combined);
var filtered = combined.filter( (x) => { if (x <= 15 ) return x; } );
console.log(filtered);

names.forEach((name) => console.log(`Howdy ${name}`)  );

console.log(filtered.every((num) =>  num < 10  ) );
console.log(filtered.every((num) =>  num < 16  ) );
console.log(filtered);

console.log(fibonacci.some((num) => num > 50 ));
console.log(fibonacci.some((num) => num > 100 ));



