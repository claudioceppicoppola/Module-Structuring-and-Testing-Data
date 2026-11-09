const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
    // Line 1: movieLength
    // Line 3: remainingSeconds
    // Line 4: totalMinutes
    // Line 6: remainingMinutes
    // Line 7: totalHours
    // Line 9: result

// b) How many function calls are there?
    // There is just 1 function call: console.log(result) in line 10

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
    // The `%` symbol is the remainder operator (modulo). `movieLength % 60` returns the integer remainder after dividing movieLength by 60, which isolates the leftover seconds that cannot form a full minute (always in the range [0, 59]).

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
    // `(movieLength - remainingSeconds) / 60`:
    // It subtracts the leftover seconds from the total duration, making the dividend an exact multiple of 60. Dividing this value by 60 performs an exact integer division to compute the complete number of whole minutes contained in the total duration without generating floating-point decimals.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
    // It represents the movie duration formatted as a timecode string ("HH:MM:SS" or "H:M:S").
    // Better, more semantic names: `formattedMovieDuration`, `formattedTime`, or `movieTimecode`.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
    // No, it fails in several edge cases:
    // 1. Single-digit units: When remainingMinutes or remainingSeconds is less than 10 (e.g. 5), it outputs "2:5:4" instead of standard padded timecode format "02:05:04" (lacks .padStart(2, "0")).
    // 2. Negative numbers: If movieLength is negative (e.g. -100), the remainder operator produces negative values, yielding incorrect timestamps like "-1:-40:-40".
    // 3. Floating-point inputs: If movieLength contains decimals (e.g. 8784.5), the remainder operator retains floating-point remainders rather than discrete whole seconds.
    // 4. Non-numeric types: Passing null, NaN, or strings produces either "0:0:0" or "NaN:NaN:NaN".