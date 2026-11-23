const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working

// Before running the code, make and explain a prediction about why the code won't work
    // Prediction: cardNumber is declared as a primitive Number, but .slice() is a method belonging to String.prototype, not Number.prototype. Calling it directly on a number will fail.

// Then run the code and see what error it gives.
    // Error: TypeError: cardNumber.slice is not a function

// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
    // Explanation: JavaScript throws a TypeError at runtime when trying to invoke a method that does not exist on the targeted data type. The prediction was rigth: primitive numbers lack indexing and slicing methods.

// Then try updating the expression last4Digits is assigned to, in order to get the correct value
    // Solution: Convert the number to a string using .toString() or String(cardNumber) before calling .slice(-4).

console.log(last4Digits); // "4213"