function repeat(str, count) {
    if (count < 0) {
        throw new Error("Count must be a non-negative integer.");
    }

    let result = "";
    for (let i = 0; i < count; i += 1) {
        result += str;
    }

    return result;
}

module.exports = repeat;