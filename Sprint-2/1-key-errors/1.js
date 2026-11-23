// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
    //R: It will show an error, because the variables are declared as 'const'

// Try playing computer with the example to work out what is going on

/*function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);*/

// =============> write your explanation here
    //R:  - Double variable declaration. The function argument is already considered a declaration.
    //    - Inside `console.log`, we should call the function to get the desired result, rather than referencing an internal variable.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
