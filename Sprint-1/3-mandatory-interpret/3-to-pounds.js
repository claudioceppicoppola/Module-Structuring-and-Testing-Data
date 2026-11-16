const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
    // 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
    //    Purpose: Strips the unit identifier character ("p") from the end of the string.
    //    Rationale: Uses `substring` starting at index 0 up to the length minus 1 (exclusive) so only the numeric characters ("399") remain for subsequent string manipulation.

    // 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
    //    Purpose: Ensures the numeric string has a minimum length of 3 characters by prepending "0" if necessary.
    //    Rationale: A valid UK pound conversion requires at least 1 digit for pounds and 2 digits for pence (e.g., "5p" becomes "005", "50p" becomes "050"). Without this normalization, calculating indices relative to the end of the string would produce empty strings or incorrect slices for values under 100p.

    // 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
    //    Purpose: Extracts the whole pound portion of the amount.
    //    Rationale: Since 1 pound equals 100 pence, the last 2 digits always represent the pence. Slicing from index 0 to `length - 2` captures all leading digits representing whole pounds (e.g., in "399", it extracts "3"; in "050", it extracts "0").

    // 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
    //    Purpose: Extracts the fractional 2-digit pence portion and guarantees it remains 2 characters long.
    //    Rationale: `substring(paddedPenceNumberString.length - 2)` retrieves the final 2 characters (e.g., "99"). `.padEnd(2, "0")` acts as a defensive safeguard to ensure the fractional component always has two digits even if an edge case produces a single character.

    // 6. console.log(`£${pounds}.${pence}`);
    //    Purpose: Formats and outputs the assembled monetary string to stdout.
    //    Rationale: Uses template literals to concatenate the currency symbol ("£"), the extracted pounds, a decimal point ("."), and the two-digit pence, outputting "£3.99".