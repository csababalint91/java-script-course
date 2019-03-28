let a;
console.log(a);
console.log(typeof a);

let patter = /xyz/;
let value = 'This is just crazy';
let result = value.match(patter);
console.log(result);
console.log(typeof result); // RETURN OBJECT,NODE BUG

if (result === null) {
    console.log('no match was found');
}
