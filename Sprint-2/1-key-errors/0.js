// Predict and explain first...
//  =============> write your prediction here
  //R: It should Any string we provide. 'toUpperCase' change the first letter selected with 'slice()'

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/*function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}*/

// =============> write your explanation here
  //R: The error was that the variable 'str' was also the argument of the function

// =============> write your new code here
function capitalise(str) {
  let word = `${str[0].toUpperCase()}${str.slice(1)}`;
  return word;
}
console.log(capitalise('perro'));