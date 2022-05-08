const repeatString = function(str, num) {
    if (num < 0){
        return 'ERROR';
    }
    
    let rtn = '';
    for(let i = 0; i < num; i++){
        rtn += str;
    }
    return rtn;
};

// Do not edit below this line
module.exports = repeatString;
