const Tailor = require('./modules/Tailor');

//const iterationNumber = 4; //number is hardcoded according to requirements

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const response = function(number){
    main(5, number);
};

readline.question("What the number of accurate: ", number => {
    response(number);
    readline.close();
});

function main(X,N){
    const result = Tailor(X, N);
    console.log("number is " + result);
}




