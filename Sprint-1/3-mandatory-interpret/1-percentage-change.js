let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
    // Line 4: 'Number' and 'carPrice.replaceAll' [2 calls]
    // Line 5: 'Number' and 'priceAfterOneYear.replaceAll' [2 calls]
    // Line 10: 'console.log' [1 call]

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
    // In line 5 the error is a SyntaxError: missing ) after argument list; The cause is a comma separator is missing between the two arguments in `replaceAll("," "")`.
    // Fix it inserting a comma between the arguments: `replaceAll(",", "")`.

// c) Identify all the lines that are variable reassignment statements
    // Line 4: carPrice = Number(carPrice.replaceAll(",", ""));
    // Line 5: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// d) Identify all the lines that are variable declarations
    // Line 1: let carPrice = "10,000";
    // Line 2: let priceAfterOneYear = "8,543";
    // Line 7: const priceDifference = carPrice - priceAfterOneYear;
    // Line 8: const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
    // 1. `carPrice.replaceAll(",", "")` correct the string by replacing every comma with an empty string, transforming "10,000" into "10000".
    // 2. `Number` explicitly casts the corrected string into a primitive numeric type (10000).
    // The Purpose is to convert formatted text input into a raw number so arithmetic operations (- and /) can be safely executed without data type mismatches or NaN results.