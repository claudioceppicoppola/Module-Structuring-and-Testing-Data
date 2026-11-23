function countChar(stringOfCharacters, findCharacter) {
    let count = 0;

    for (const currentChar of stringOfCharacters) {
        if (currentChar === findCharacter) {
            count += 1;
        }
    }

    return count;
}

module.exports = countChar;