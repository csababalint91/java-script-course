// String Methods
//Helpful string methods on the built-in native string constructor function

let first = 'Knowledge is power but enthusiasm pulls the switch';
let second = 'Do or do not. There is no try.';
let third = '4,8,15,16,23,42';

// YOU CAN EVEN CALL METHODS ON STRING LITERALS
// console.log('bob loves you'.toUpperCase());

let mySplit = third.split(',');
console.log(mySplit);

let mySlice = first.slice(12,19);
console.log(mySlice);

let mySubStr = first.substr(0,9);
console.log(mySubStr);

let myEndWith = second.endsWith('try.');
console.log(myEndWith);

let myStartWith = second.startsWith('Do');
console.log(myStartWith);

let myInclude = second.includes('There');
console.log(myInclude);

let myRepeat = 'Ha!'.repeat(3);
console.log(myRepeat);

let myTrim = '   bloated    ';
console.log(myTrim.length);
console.log(myTrim.trim().length);

