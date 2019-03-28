// ERROR HANDLING WITH TRY CATCH

/* let a = 7 * undefined / 'panama';
console.log(a); */

/* function beforeTryCatch() {
    let obj = undefined;
    console.log(obj.b);
    console.log('If the previous line of code throws an exeption you \'ll never see this')
}

// beforeTryCatch();

function afterTryCatch() {
    try {
        let obj = undefined;
        console.log(obj.b);
        console.log('If the previous line of code throws an exeption you \'ll never see this')
    
    } catch (error) {
        
        console.log('I caught an exeption: ' + error.message);        

    } finally {
        console.log('This will happen no matter what.')
    }

    console.log('My application is still runing!');
}

afterTryCatch(); */

function performCalculation(obj) {
    if (!obj.hasOwnProperty('b')) {      //    if (obj.hasOwnProperty('b') == false )
    throw new Error('Object missing property');
    }
    //continue with calculation w/ obj.b
    return 6;
}

function performHigherlevelOperation() {
    let obj = {};
    let value = 0;
    try {
        value = performCalculation(obj);
    } catch (error) {
        console.log(error.message);
    }

    if (value == 0) {
        // contingency
        // retry logic
    }
}

performHigherlevelOperation();