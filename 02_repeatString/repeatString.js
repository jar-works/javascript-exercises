const repeatString = function(string, num) {
    if (!num) { // No repeat
        return "";
    } else if (num < 0) {
        return "ERROR";
    }

    let originalString = string;

    for (let i = 0; i < num - 1; i++) {
        string += originalString;
    }

    return string;
};

// Do not edit below this line
module.exports = repeatString;
