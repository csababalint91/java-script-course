// DON'T DO THIS!!!!!
/*
var myVariable = 'I am at the global scope';

// THIS EITHER
var my function = function() {
    console.log('me too!!!');
}
*/

function one() {
    return 'one';
}

// let value = one();
// console.log(value);
// console.log(one());

// let value = one;
// console.log(typeof value);
// console.log(typeof one);
// console.log(value());

// string
// number
// bolean
// undefined
// function

/*
function two() {
    return function() {
        console.log('two');
    }
}

let myFunction = two();
myFunction();
*/

function three() {
    return function() {
        return ('three');
    }
}

console.log(three()());

