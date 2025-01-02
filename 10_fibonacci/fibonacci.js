const fibonacci = function(num) {
    if (typeof(num) == "string") {
        num = parseInt(num);
    }
    
    if (num === 0) { 
        return 0; 
    } else if (num < 0) { 
        return "OOPS"; 
    }
    
    let lastResult = 0;
    let currentFib = 1;

    for (let i = 1; i <= num; i++) {
        if (num === i) { return currentFib; }
        const temp = currentFib;
        currentFib += lastResult;
        lastResult = temp;
    }
};

// Do not edit below this line
module.exports = fibonacci;
