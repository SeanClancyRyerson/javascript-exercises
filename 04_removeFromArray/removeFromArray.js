const removeFromArray = function(arr, ...nums) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < nums.length; j++){
            if (arr[i] === nums[j]){
                delete arr[i];
            }
        }
    }
    let rtn = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === undefined){
            continue;
        }
        rtn.push(arr[i]);
    }
    return rtn;
};

// Do not edit below this line
module.exports = removeFromArray;
