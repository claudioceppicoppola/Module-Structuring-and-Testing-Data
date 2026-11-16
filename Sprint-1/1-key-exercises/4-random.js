const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
    // num represents a random integer between minimum (1) and maximum (100), inclusive of both bounds.

// Try breaking down the expression and using documentation to explain what it means
    // 1. (maximum - minimum + 1) calculates the total number of possible integers in the range (100).
    // 2. Math.random() generates a floating-point number in the range [0, 1).
    // 3. Math.random() * (maximum - minimum + 1) scales that range to [0, 100).
    // 4. Math.floor() rounds down to the nearest whole integer, yielding [0, 99].
    // 5. + minimum shifts the range up by 1, resulting in an integer from [1, 100].

// It will help to think about the order in which expressions are evaluated
    // Inner parentheses evaluate first ((maximum - minimum + 1)), then multiplication with Math.random(), then Math.floor(), and finally the addition of minimum (+ minimum).

// Try logging the value of num and running the program several times to build an idea of what the program is doing
    console.log(num);