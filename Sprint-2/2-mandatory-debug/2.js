// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
    // R: Will work, but there are unnecesary lines an declarations

/*const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);*/

// Now run the code and compare the output to your prediction
// =============> write the output here
    // R: The output its only showing me the 'num' variable instead of the other arguments

// Explain why the output is the way it is
// =============> write your explanation here
    // R: Because the function its automatically taking the pre declared num value

// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
