const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }

    let result = 0;

    let start = num1
    let finish = num2;

    if (num1 > num2) {
        start = num2;
        finish = num1;
    }

    for (let i = start; i <= finish; i++) {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
