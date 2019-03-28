// Date objects

let today = new Date();
console.log(today);

let csaba = new Date('Janjuary 10, 1991 07:03:02');
let tamas = new Date('1991-01-10T07:03:02');
let csbaab = new Date(1991, 01, 10);
let csabad = new Date(1991, 01, 10, 7, 3, 2);

console.log(tamas);
console.log(csaba);
console.log(csabad);

var elapsedTime = today - csaba;
console.log(elapsedTime);

//get parts
console.log(csaba.getDate()); // MONDAY = 1, SUNDAY = 7

console.log(tamas.getTime());



