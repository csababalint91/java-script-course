/* let name = 'bob';
console.log(`hi ${name}`);

let sentence = `This is really convenience.
        You probably wil never want to do something
        quite like this.  You might choose to put
        long passages of text into an external file 
    and load it somehow.`;
    console.log(sentence);

 */

 function getReasonCount() { return 2; }

 let interpolation = `Give me ${ (getReasonCount() == 1 ? 'one good reason' : 'a few good reason') } to try this.`

 console.log(interpolation);