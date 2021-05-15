const Tailor = require('./modules/Tailor');

const iterationNumber = 4; //number is hardcoded according to requirements


main(7);


function main(X){
    const result = Tailor(X, iterationNumber);
    console.log("number is " + result);
}




