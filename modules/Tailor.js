function Tailor(x, count){
    //1+((n-1)*n)/fact(n))*X
    let result = 1;
    let nominator = [];
    nominator[0] = 1;
    for (i = 1; i < count; i++){
        nominator[i] = Math.abs(nominator[i-1]*i) * Math.pow(-1, i);
        let denominator = factorial(i);
        result = result + nominator[i]*x/denominator;
    }
    return result;
}

function factorial(number){
    if(number > 1)
        return number + factorial(number-1);
    else
        return 1;

}

module.exports = Tailor