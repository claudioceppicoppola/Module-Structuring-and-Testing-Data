// Currently trying to print the string "I was born in Bolton" but it isn't working...
    // Error: ReferenceError: Cannot access 'cityOfBirth' before initialization.

// what's the error ?
    // Cause: Attempting to access a variable declared with `const` while it is in the Temporal Dead Zone.

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
