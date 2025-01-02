const palindromes = function (str = "") {
    const cleanStr = str.split("").filter(isCharOrNumber).join("").toLocaleLowerCase();
    const reversedStr = cleanStr.split("").reverse().join("").toLocaleLowerCase();
    console.log(`${cleanStr} ${reversedStr}`);
    return reversedStr === cleanStr;
};

// Will only return true if the char being checked is a number or char
function isCharOrNumber(char) {
    const result = /[a-zA-Z]/.test(char) || /[0-9]/.test(char);
    console.log(result);
    return result;
}

// Do not edit below this line
module.exports = palindromes;
