const removeFromArray = function(arr) {
    // Get all arguments after the first one (if multiple)
    let removeArr = Array.from(arguments).slice(1);

    return arr.filter(value => !removeArr.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
