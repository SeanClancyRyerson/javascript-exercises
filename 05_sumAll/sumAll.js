const sumAll = function(x, y) {
    if (x < 0 || y < 0 || typeof(x) !== 'number' || typeof(y) !== 'number'){
        return "ERROR";
    }
    let sum = 0;
    let bot = 0;
    let top = 0;
    if (x < y){
        bot = x;
        top = y;
    }
    else {
        bot = y;
        top = x;
    }
    for (let i = bot; i <= top; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
